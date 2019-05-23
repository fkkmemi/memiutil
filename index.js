'use strict'
const buf2hexStr = (buf) => {
  let ls = []
  for (let i = 0; i < buf.length; i++) {
    let h = buf[i].toString(16).toUpperCase().padStart(2, '0')
    ls.push(h)
  }
  return ls.join(' ')
}
module.exports = {
  buf2hexStr
}
