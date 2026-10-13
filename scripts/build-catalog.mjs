import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { bitCutout } from './bit-cutout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const prod = path.join(root, 'public', 'products');
const tmp = path.join(root, 'tmp-cat');
await fs.mkdir(tmp, { recursive: true });

const W = 1600;
const H = 1200;

async function sampleColor(file, x, y, size = 6) {
  const { data } = await sharp(file)
    .extract({ left: x, top: y, width: size, height: size })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let r = 0, g = 0, b = 0;
  const n = data.length / 3;
  for (let i = 0; i < data.length; i += 3) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
  return [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
}

const rgb = ([r, g, b]) => `rgb(${r},${g},${b})`;

/* ---------- relabelled packs for sizes without a clean studio pack ---------- */

async function relabel({ src, out, box, sampleAt, text, font, size, weight = 800, squeezeX = 1 }) {
  const file = path.join(prod, src);
  const fill = await sampleColor(file, sampleAt[0], sampleAt[1]);
  const meta = await sharp(file).metadata();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${meta.width}" height="${meta.height}">
    <defs><filter id="soft"><feGaussianBlur stdDeviation="2.5"/></filter></defs>
    <rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="4" fill="${rgb(fill)}" filter="url(#soft)"/>
    <rect x="${box.x + 3}" y="${box.y + 3}" width="${box.w - 6}" height="${box.h - 6}" fill="${rgb(fill)}"/>
    <text x="${box.x + 2}" y="${box.y + box.h * 0.8}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="#141414" opacity="0.93">${text}</text>
  </svg>`;
  let img = sharp(file).composite([{ input: Buffer.from(svg) }]);
  if (squeezeX !== 1) {
    const buf = await img.toBuffer();
    const nw = Math.round(meta.width * squeezeX);
    const narrow = await sharp(buf).resize(nw, meta.height, { fit: 'fill' }).toBuffer();
    const bg = await sampleColor(file, 30, 30);
    img = sharp({ create: { width: meta.width, height: meta.height, channels: 3, background: { r: bg[0], g: bg[1], b: bg[2] } } })
      .composite([{ input: narrow, left: Math.round((meta.width - nw) / 2), top: 0 }]);
  }
  await img.jpeg({ quality: 92 }).toFile(path.join(prod, out));
}

export async function buildPacks() {
  await relabel({
    src: 'bishnoi-6-5mm-pack.jpg', out: 'bishnoi-10mm-pack.jpg',
    box: { x: 562, y: 454, w: 100, h: 52 }, sampleAt: [515, 497],
    text: '10MM', font: 'Segoe Print, Comic Sans MS, cursive', size: 30, weight: 400,
  });
  await relabel({
    src: 'bishnoi-33mm-pack.jpg', out: 'bishnoi-19mm-pack.jpg',
    box: { x: 511, y: 492, w: 120, h: 44 }, sampleAt: [640, 500],
    text: '19MM', font: 'Arial, Helvetica, sans-serif', size: 37, squeezeX: 0.72,
  });
  await relabel({
    src: 'bishnoi-33mm-pack.jpg', out: 'bishnoi-26mm-pack.jpg',
    box: { x: 511, y: 492, w: 120, h: 44 }, sampleAt: [640, 500],
    text: '26MM', font: 'Arial, Helvetica, sans-serif', size: 37, squeezeX: 0.85,
  });
  await relabel({
    src: 'bishnoi-45mm-pack.jpg', out: 'bishnoi-50mm-pack.jpg',
    box: { x: 453, y: 512, w: 116, h: 46 }, sampleAt: [580, 520],
    text: '50MM', font: 'Arial, Helvetica, sans-serif', size: 38,
  });
}
/* ---------- real bit photo, sized to its diameter ---------- */

const K = 10.4;          // px per mm of diameter
const HUB_MM = 25;       // M14 adapter body on small bits
const CUT = await bitCutout();
// Rows in the cutout (550 px tall): shank+rim+text, slot body, rings+diamond segment.
const TOP_END = 190;
const MID_END = 375;
const BODY_W = 370;      // width of the diamond segment in the cutout
const NOTCH_X = 241;

async function piece(left, top, width, height, outW, outH) {
  return sharp(CUT)
    .extract({ left, top, width, height })
    .resize(Math.max(2, Math.round(outW)), Math.max(2, Math.round(outH)), { fit: 'fill' })
    .png()
    .toBuffer();
}

function cylinderShade(w, h) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="s" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.45"/>
      <stop offset="0.14" stop-color="#000" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#fff" stop-opacity="0.12"/>
      <stop offset="0.58" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.86" stop-color="#000" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.5"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#s)"/></svg>`);
}

/* Centre-cropped slice of the photo at a fixed scale, shaded as a narrower cylinder. */
async function slice(centerX, top, height, outW, scale, outH = height * scale) {
  const cropW = Math.min(BODY_W, Math.max(6, Math.round(outW / scale)));
  const left = Math.max(15, Math.min(15 + BODY_W - cropW, Math.round(centerX - cropW / 2)));
  const w = Math.round(outW), h = Math.round(outH);
  const base = await piece(left, top, cropW, height, w, h);
  return sharp(base).composite([{ input: cylinderShade(w, h), blend: 'atop' }]).png().toBuffer();
}

async function buildBit(d) {
  const targetH = Math.round(800 + (d - 45) * 3);
  const layers = [];
  let outW, footY, footW;

  if (d >= HUB_MM) {
    const u = (d * K) / BODY_W;
    const w = Math.round(400 * u);
    const topH = Math.round(TOP_END * u);
    const botH = Math.round((550 - MID_END) * u);
    const midH = Math.max(40, targetH - topH - botH);
    layers.push({ input: await piece(0, 0, 400, TOP_END, w, topH), left: 0, top: 0 });
    layers.push({ input: await piece(0, TOP_END, 400, MID_END - TOP_END, w, midH), left: 0, top: topH });
    layers.push({ input: await piece(0, MID_END, 400, 550 - MID_END, w, botH), left: 0, top: topH + midH });
    outW = w;
    footY = topH + midH + botH;
    footW = Math.round(d * K);
  } else {
    const hubU = (HUB_MM * K) / BODY_W;
    const hubW = Math.round(400 * hubU);
    const hubH = Math.round(TOP_END * hubU * 1.55);
    const bw = Math.round(d * K);
    const botH = Math.round((550 - MID_END) * hubU);
    const tubeH = Math.max(80, targetH - hubH - botH);
    const cx = hubW / 2;
    const tubeCenter = d >= 14 ? 158 : 262;
    const capH = Math.round(85 * hubU);
    layers.push({ input: await piece(0, 0, 400, 85, hubW, capH), left: 0, top: 0 });
    layers.push({ input: await piece(0, 85, 400, TOP_END - 85, hubW, hubH - capH), left: 0, top: capH });
    layers.push({ input: await slice(tubeCenter, TOP_END, MID_END - TOP_END, bw, hubU, tubeH), left: Math.round(cx - bw / 2), top: hubH });
    layers.push({ input: await slice(NOTCH_X, MID_END, 550 - MID_END, bw, hubU), left: Math.round(cx - bw / 2), top: hubH + tubeH });
    const hubShadow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${hubW}" height="${hubH + 40}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0.35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient></defs>
      <rect x="${cx - bw / 2}" y="${hubH}" width="${bw}" height="34" fill="url(#g)"/>
      <ellipse cx="${cx}" cy="${hubH - 2}" rx="${hubW * 0.46}" ry="${Math.max(4, hubW * 0.035)}" fill="#000" opacity="0.18"/></svg>`);
    layers.push({ input: hubShadow, left: 0, top: 0 });
    outW = hubW;
    footY = hubH + tubeH + botH;
    footW = bw;
  }

  const buf = await sharp({ create: { width: outW, height: footY + 4, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(layers)
    .png()
    .toBuffer();
  return { buf, width: outW, height: footY + 4, footY: footY - 4, footW, cx: outW / 2 };
}

/* ---------- jar cut from its studio pack ---------- */

async function jarBox(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const bg = await sampleColor(file, 20, 20, 10);
  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
  const x0 = Math.round(info.width * 0.14), x1 = Math.round(info.width * 0.86);
  const hits = [];
  for (let y = 0; y < info.height; y += 2) {
    const r = (y * info.width + x0 - 20) * 3;
    const rowBg = [data[r], data[r + 1], data[r + 2]];
    for (let x = x0; x < x1; x += 2) {
      const i = (y * info.width + x) * 3;
      const dr = data[i] - rowBg[0], dg = data[i + 1] - rowBg[1], db = data[i + 2] - rowBg[2];
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      const shadow = dr < 0 && dg < 0 && db < 0 && Math.abs(dr - dg) < 12 && Math.abs(dg - db) < 12 && dist < 80;
      if (dist > 38 && !shadow) {
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        hits.push(x, y);
      }
    }
  }
  const cutoff = minY + (maxY - minY) * 0.65;
  for (let k = 0; k < hits.length; k += 2) {
    if (hits[k + 1] > cutoff) continue;
    if (hits[k] < minX) minX = hits[k];
    if (hits[k] > maxX) maxX = hits[k];
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY, bg, info };
}

/* ---------- scene ---------- */

async function scene({ d, pack, out }) {
  const packFile = path.join(prod, pack);
  const box = await jarBox(packFile);
  const bit = await buildBit(d);
  const bg = box.bg;

  const floorY = 1110;
  const jarScale = Math.min(900 / box.h, 720 / box.w);
  const pad = 70;
  const cropL = Math.max(0, box.x - pad), cropT = Math.max(0, box.y - pad);
  const cropW = Math.min(box.info.width - cropL, box.w + pad * 2);
  const cropH = Math.min(box.info.height - cropT, box.h + pad * 2);
  const jw = Math.round(cropW * jarScale), jh = Math.round(cropH * jarScale);
  const feather = Math.round(pad * jarScale * 0.8);
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${jw}" height="${jh}">
    <defs><filter id="f"><feGaussianBlur stdDeviation="${feather / 2.2}"/></filter></defs>
    <rect x="${feather}" y="${feather}" width="${jw - feather * 2}" height="${jh - feather * 2}" fill="#fff" filter="url(#f)"/></svg>`);
  const jar = await sharp(packFile)
    .extract({ left: cropL, top: cropT, width: cropW, height: cropH })
    .resize(jw, jh)
    .ensureAlpha()
    .composite([{ input: await sharp(mask).png().toBuffer(), blend: 'dest-in' }])
    .png()
    .toBuffer();

  const jarVisW = box.w * jarScale;
  const gap = 110;
  const total = jarVisW + gap + bit.width;
  const startX = (W - total) / 2;
  const jarLeft = Math.round(startX - (box.x - cropL) * jarScale);
  const jarTop = Math.round(floorY - (box.y - cropT + box.h) * jarScale);
  const bitCx = startX + jarVisW + gap + bit.width / 2;
  const bitLeft = Math.round(bitCx - bit.cx);
  const bitTop = Math.round(floorY - bit.footY);

  const light = bg.map((c) => Math.min(255, c + 10));
  const dark = bg.map((c) => Math.max(0, c - 16));
  const backdrop = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="g" cx="0.5" cy="0.38" r="0.85"><stop offset="0" stop-color="${rgb(light)}"/><stop offset="0.7" stop-color="${rgb(bg)}"/><stop offset="1" stop-color="${rgb(dark)}"/></radialGradient>
      <filter id="b" x="-50%" y="-300%" width="200%" height="700%"><feGaussianBlur stdDeviation="22"/></filter>
      <filter id="b2" x="-50%" y="-300%" width="200%" height="700%"><feGaussianBlur stdDeviation="7"/></filter>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <ellipse cx="${bitCx + bit.footW * 0.12}" cy="${floorY + 6}" rx="${bit.footW * 0.62 + 30}" ry="${26}" fill="#000" opacity="0.22" filter="url(#b)"/>
    <ellipse cx="${bitCx}" cy="${floorY}" rx="${bit.footW * 0.5}" ry="6" fill="#000" opacity="0.35" filter="url(#b2)"/>
  </svg>`);

  await sharp(backdrop)
    .composite([
      { input: jar, left: jarLeft, top: jarTop },
      { input: bit.buf, left: bitLeft, top: bitTop },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(prod, out));
}

const sizes = [
  { d: 6.5, pack: 'bishnoi-6-5mm-pack.jpg', out: 'bishnoi-6-5mm-catalog.jpg' },
  { d: 8.5, pack: 'core-bit-8-5mm-pack.jpg', out: 'core-bit-8-5mm-catalog.jpg' },
  { d: 10, pack: 'bishnoi-10mm-pack.jpg', out: 'bishnoi-10mm-catalog.jpg' },
  { d: 14, pack: 'bishnoi-14mm-pack.jpg', out: 'bishnoi-14mm-catalog.jpg' },
  { d: 19, pack: 'bishnoi-19mm-pack.jpg', out: 'bishnoi-19mm-catalog.jpg' },
  { d: 26, pack: 'bishnoi-26mm-pack.jpg', out: 'bishnoi-26mm-catalog.jpg' },
  { d: 33, pack: 'bishnoi-33mm-pack.jpg', out: 'bishnoi-33mm-catalog.jpg' },
  { d: 37, pack: 'bishnoi-37mm-pack.jpg', out: 'bishnoi-37mm-catalog.jpg' },
  { d: 40, pack: 'bishnoi-40mm-pack.jpg', out: 'bishnoi-40mm-catalog.jpg' },
  { d: 45, pack: 'bishnoi-45mm-pack.jpg', out: 'bishnoi-45mm-catalog.jpg' },
  { d: 50, pack: 'bishnoi-50mm-pack.jpg', out: 'bishnoi-50mm-catalog.jpg' },
  { d: 57, pack: 'bishnoi-57mm-pack.jpg', out: 'bishnoi-57mm-catalog.jpg' },
];

if (process.argv.includes('--packs')) await buildPacks();
if (process.argv.includes('--scenes')) {
  const only = process.argv.find((a) => a.startsWith('--only='))?.split('=')[1];
  for (const s of sizes) {
    if (only && String(s.d) !== only) continue;
    await scene(s);
    console.log('OK', s.out);
  }
}
