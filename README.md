# memiutil

## install

```bash
$ npm i memiutil --save
# or
$ yarn add memiutil
```

## use

```javascript
const memiutil = require('memiutil')

const bf = Buffer.from([0x01, 0x02])

const s = memiUtil.buf2hexStr(bf)
console.log(s) // 0x01 0x02
```
