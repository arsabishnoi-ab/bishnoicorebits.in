Add-Type -AssemblyName System.Drawing

$root = "d:\projects\suresh bishnoi core bit\public\products"
$srcBit = [System.Drawing.Bitmap]::FromFile((Join-Path $root "bishnoi-real-bit.jpg"))

function Get-ContentBounds([System.Drawing.Bitmap]$bmp) {
  $bg = $bmp.GetPixel(4, 4)
  $minX = $bmp.Width
  $minY = $bmp.Height
  $maxX = 0
  $maxY = 0
  for ($y = 0; $y -lt $bmp.Height; $y += 1) {
    for ($x = 0; $x -lt $bmp.Width; $x += 1) {
      $p = $bmp.GetPixel($x, $y)
      $delta = [Math]::Abs($p.R - $bg.R) + [Math]::Abs($p.G - $bg.G) + [Math]::Abs($p.B - $bg.B)
      if ($delta -gt 28) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  $pad = 4
  $minX = [Math]::Max(0, $minX - $pad)
  $minY = [Math]::Max(0, $minY - $pad)
  $maxX = [Math]::Min($bmp.Width - 1, $maxX + $pad)
  $maxY = [Math]::Min($bmp.Height - 1, $maxY + $pad)
  New-Object System.Drawing.Rectangle $minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1)
}

$bitTrim = $srcBit.Clone((Get-ContentBounds $srcBit), $srcBit.PixelFormat)

$items = @(
  @{ mm = 6.5; out = "bishnoi-6-5mm-set.jpg"; jar = "bishnoi-6-5mm-pack.jpg" },
  @{ mm = 8.5; out = "core-bit-8-5mm-set.jpg"; jar = "core-bit-8-5mm-pack.jpg" },
  @{ mm = 10; out = "bishnoi-10mm-set.jpg"; jar = "bishnoi-10mm.jpg" },
  @{ mm = 14; out = "bishnoi-14mm-set.jpg"; jar = "bishnoi-14mm-pack.jpg" },
  @{ mm = 19; out = "bishnoi-19mm-set.jpg"; jar = "bishnoi-19mm.jpg" },
  @{ mm = 26; out = "bishnoi-26mm-set.jpg"; jar = "bishnoi-26mm.jpg" },
  @{ mm = 33; out = "bishnoi-33mm-set.jpg"; jar = "bishnoi-33mm-pack.jpg" },
  @{ mm = 37; out = "bishnoi-37mm-set.jpg"; jar = "bishnoi-37mm-pack.jpg" },
  @{ mm = 40; out = "bishnoi-40mm-set.jpg"; jar = "bishnoi-40mm-pack.jpg" },
  @{ mm = 45; out = "bishnoi-45mm-pair.jpg"; jar = "bishnoi-45mm-pack.jpg" },
  @{ mm = 50; out = "bishnoi-50mm-set.jpg"; jar = "bishnoi-50mm.jpg" },
  @{ mm = 57; out = "bishnoi-57mm-set.jpg"; jar = "bishnoi-57mm-pack.jpg" }
)

$canvasW = 1600
$canvasH = 1200
$bg = [System.Drawing.Color]::FromArgb(255, 249, 249, 249)

foreach ($item in $items) {
  $jarPath = Join-Path $root $item.jar
  if (-not (Test-Path $jarPath)) { throw "Missing jar $($item.jar)" }
  $jar = [System.Drawing.Bitmap]::FromFile($jarPath)

  $bmp = New-Object System.Drawing.Bitmap $canvasW, $canvasH
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear($bg)

  $jarMaxH = 920
  $jarMaxW = 680
  $jarScale = [Math]::Min($jarMaxW / $jar.Width, $jarMaxH / $jar.Height)
  $jarW = [int]($jar.Width * $jarScale)
  $jarH = [int]($jar.Height * $jarScale)
  $jarX = [int]((760 - $jarW) / 2) + 40
  $jarY = [int](($canvasH - $jarH) / 2)
  $g.DrawImage($jar, $jarX, $jarY, $jarW, $jarH)

  $bitW = [int][Math]::Round(150 + (([double]$item.mm - 6.5) / 50.5) * 430)
  $bitH = [int][Math]::Round($bitW * ($bitTrim.Height / [double]$bitTrim.Width))
  $bitX = 980 + [int]((520 - $bitW) / 2)
  $bitY = [int](($canvasH - $bitH) / 2)
  $g.DrawImage($bitTrim, $bitX, $bitY, $bitW, $bitH)

  $outPath = Join-Path $root $item.out
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $g.Dispose()
  $bmp.Dispose()
  $jar.Dispose()
  Write-Output ("{0} mm  jar={1}x{2}  bit={3}px" -f $item.mm, $jarW, $jarH, $bitW)
}

$srcBit.Dispose()
$bitTrim.Dispose()
