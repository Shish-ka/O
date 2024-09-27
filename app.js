console.log ('Задание 1')
let user = {
    name: "John",
    age: 30
}
console.log ('age' in user)


console.log ('Задание 2')
let users = [
    {
    name: "John",
    age: 30
    },
    {
    name: "Bob",
    age: 21
    },
    {
    name: "Anna",
    age: 19
    }
]
let bob = users.findIndex(obj => obj.name === "Bob")
console.log (users[bob])


console.log ('Задание 3')
let anna = users.findIndex(obj => obj.name === "Anna")
delete users[anna]
console.log (users)


console.log ('Задание 4')
console.log (users.sort((b, s) => b.age - s.age))


console.log ('Задание 5')
const obj = {
    id: 5,
   token: 12343423
}
console.log (obj['id'])


console.log ('Задание 6')
const userId = obj.id
console.log (userId)

