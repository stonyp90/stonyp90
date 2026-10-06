// Offline asset preparation. Only the alpha mask is written; the photo is read-only.
import { parseArgs } from 'node:util'
import sharp from 'sharp'

const { values } = parseArgs({
  options: {
    input: { type: 'string' },
    portrait: { type: 'string' },
    output: { type: 'string' },
    'opaque-threshold': { type: 'string', default: '250' },
  },
})

if (!values.input || !values.portrait || !values.output) {
  throw new Error('Required arguments: --input cutout.png --portrait original.jpg --output mask.webp')
}
const threshold = Number(values['opaque-threshold'])
if (!Number.isInteger(threshold) || threshold < 1 || threshold > 255) {
  throw new Error('--opaque-threshold must be an integer between 1 and 255')
}
const { width, height } = await sharp(values.portrait).metadata()
if (!width || !height || !(await sharp(values.input).metadata()).hasAlpha) {
  throw new Error('The portrait needs dimensions and the cutout needs a true alpha channel')
}
const alpha = await sharp(values.input)
  .resize(width, height, { fit: 'fill' })
  .extractChannel('alpha')
  .raw()
  .toBuffer()
// The generated interior was slightly translucent. Restore full opacity there,
// retaining its soft edge values and every original RGB pixel in the photograph.
for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] >= threshold) alpha[i] = 255
}
await sharp({ create: { width, height, channels: 3, background: { r: 255, g: 255, b: 255 } } })
  .joinChannel(alpha, { raw: { width, height, channels: 1 } })
  .webp({ lossless: true, effort: 6 })
  .toFile(values.output)
console.log(`Prepared ${width}×${height} alpha mask: ${values.output}`)
