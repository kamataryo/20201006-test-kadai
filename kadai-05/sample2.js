const person = {
  name: 'kamata',
  age: 35,
  'has-cat': true,
//   address: {
//       prefecture: 'Shiga',
//       country: 'Japan'
//   }
}

console.log(person.nickname)
console.log(person.address)
console.log(person.address.prefecture) // undefined のプロパティにアクセスしようとするとエラーが発生して処理が停止する