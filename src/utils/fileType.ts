import data from './fileTypeData.json'

const fileTypeMap = new Map<string, { single: string, ext: string, mime: string }>()
const fileTypeData = Object.entries(data).flatMap(([key, value]) => {
  return value.signs.filter(sign => sign.startsWith('0')).map((sign) => {
    const item = ({
      single: sign.split(',')[1],
      ext: key,
      mime: value.mime,
    })
    fileTypeMap.set(sign, item)
    return item
  })
})

export function getMimeTypeFromArrayBuffer(arrayBuffer: ArrayBuffer) {
  const uint8arr = new Uint8Array(arrayBuffer)

  const len = 4
  if (uint8arr.length >= len) {
    const signatureArr = Array.from({ length: len })
    for (let i = 0; i < len; i++)
      signatureArr[i] = (new Uint8Array(arrayBuffer))[i].toString(16).padStart(2, '0')
    const signature = signatureArr.join('').toUpperCase()

    if (fileTypeMap.has(signature))
      return fileTypeMap.get(signature)

    return fileTypeData.find(item => item.single.startsWith(signature))
  }
  return null
}
