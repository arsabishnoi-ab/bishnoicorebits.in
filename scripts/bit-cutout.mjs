import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'public', 'products', 'bishnoi-real-bit.jpg');

export const CROP = { left: 370, top: 160, width: 400, height: 550 };

/* Real bit cut out of its cream backdrop, cropped to CROP. */
export async function bitCutout() {
  const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const out = Buffer.alloc(CROP.width * CROP.height * 4);
  for (let y = 0; y < CROP.height; y++) {
    const sy = y + CROP.top;
    const l = (sy * w + 40) * 3, r = (sy * w + w - 40) * 3;
    for (let x = 0; x < CROP.width; x++) {
      const sx = x + CROP.left;
      const t = sx / w;
      const bg = [0, 1, 2].map((c) => data[l + c] * (1 - t) + data[r + c] * t);
      const i = (sy * w + sx) * 3;
      const dr = data[i] - bg[0], dg = data[i + 1] - bg[1], db = data[i + 2] - bg[2];
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      const warm = (bg[0] - bg[2]) - (data[i] - data[i + 2]);
      const score = dist + Math.max(0, warm) * 2.2;
      const a = Math.max(0, Math.min(1, (score - 14) / 22));
      const o = (y * CROP.width + x) * 4;
      out[o] = data[i]; out[o + 1] = data[i + 1]; out[o + 2] = data[i + 2];
      out[o + 3] = Math.round(a * 255);
    }
  }
  const notchFrom = 515;
  for (let y = 0; y < CROP.height; y++) {
    const row = y * CROP.width * 4;
    let a = -1, b = -1;
    for (let x = 0; x < CROP.width; x++) if (out[row + x * 4 + 3] > 150) { a = x; break; }
    for (let x = CROP.width - 1; x >= 0; x--) if (out[row + x * 4 + 3] > 150) { b = x; break; }
    if (a < 0 || b - a < 10) continue;
    for (let x = a; x <= b; x++) {
      const o = row + x * 4 + 3;
      if (y >= notchFrom && x > 220 && x < 262) continue;
      out[o] = 255;
    }
  }
  return sharp(out, { raw: { width: CROP.width, height: CROP.height, channels: 4 } }).png().toBuffer();
}

if (process.argv.includes('--preview')) {
  const png = await bitCutout();
  await sharp({ create: { width: CROP.width, height: CROP.height, channels: 3, background: '#2a6' } })
    .composite([{ input: png }])
    .png()
    .toFile(path.join(root, 'tmp-cat', 'cutout.png'));
}
