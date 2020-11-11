const person = {
  name: 'kamata',
  age: 35,
}

console.log(person.age)
person.age = 36 // オブジェクトのプロパティに代入することができる
console.log(person.age)
person['age'] = 37 // もちろんブラケット記法でもOK
console.log(person.age)
