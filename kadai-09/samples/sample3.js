// 外部のモジュールの cowsay を使ってみる

const cowsay = require('cowsay')
const output = cowsay.say({ text: 'Moo!!' })

console.log(output)