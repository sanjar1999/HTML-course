function Cat(color, name) {
    this.color = color
    this.name = name
}

// const cat = new Cat('Black', 'Sanjar')
// console.log(cat)

// function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'sam')
// console.log(cat)

const cat = new Cat()
console.log(cat)