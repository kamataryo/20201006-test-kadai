const profile = {
    name: 'kamata',
    age:35,
    hobby: 'hiking',
    major: 'science',
    gender: 'Male',
    hometown: 'Shiga'
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('私の ' + key + ' は ' + value + ' です。')
}