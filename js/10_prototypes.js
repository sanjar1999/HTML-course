// __proto__

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says myau`)
}

const cat = new Cat('Kot', 'white')

cat.voice()