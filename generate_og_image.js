import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

const htmlPath = path.resolve('scripts/og-image.html')
const outputPath = path.resolve('public/og-image.png')

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
]

const browserPath = chromePaths.find((p) => fs.existsSync(p))

if (!browserPath) {
  console.error('No supported browser (Chrome or Edge) found for headless rendering.')
  process.exit(1)
}

console.log(`Generating Open Graph image using ${path.basename(browserPath)}...`)
const cmd = `"${browserPath}" --headless=new --window-size=1200,630 --hide-scrollbars --virtual-time-budget=3000 --screenshot="${outputPath}" "${htmlPath}"`

try {
  execSync(cmd, { stdio: 'inherit' })
  console.log(`Open Graph image created successfully at: ${outputPath}`)
} catch (error) {
  console.error('Failed to generate Open Graph image:', error)
  process.exit(1)
}
