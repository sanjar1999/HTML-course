// const person = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`You know ${what}, ${name} ${this.surname}`)
//     }
// }

// const john = { surname: 'John' }
// person.knows('everything', 'Brandon')
// person.knows.call(john, 'nothing', 'Snow')


// function Person(name, age) {
//     this.name = name
//     this.age = age

//     console.log(this)
// }

// const sanjar = new Person("Sanjar", 21)

function logThis() {
    console.log(this)
}

const obj = { num: 42 }
logThis.bind(obj)()
logThis.call(obj)
logThis.apply(obj)