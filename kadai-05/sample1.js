const person = {
  name: 'kamata',
  age: 35,
  'has-cat': true
}

// console.log(person.has-cat) - が減算の演算子として解釈される
console.log(person['has-cat'])