const express = require('express')
const CryptoJS = require('crypto-js')
const app = express()

const data = {api_url: 'https://bimo-api.herokuapp.com/api/v1/'}

const stringText = CryptoJS.AES.encrypt(JSON.stringify(data), 'H.y{%w421C[AgsU;7_N')

console.log(stringText.ciphertext)

app.get('/', (req, res) => res.send(stringText.ciphertext))

app.listen(8080, () => console.log('Example app listening on port 80!'))
