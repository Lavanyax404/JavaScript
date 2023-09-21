//Assignment 1: Array Operations
let fruits = []
fruits.push("apple", "banana", "orange")
fruits.splice(0,1)
fruits.push("grape")
fruits.splice(1,1,"pear")
console.log(fruits)

//Assignment 2: Object Operations
let person = {}
person.name="John"
person.age=30
person.city="New York"
delete person.age
person.job="Engineer"
person.city="san Francisco"
console.log(person)

//Assignment 3: Array of Objects Operations 
let cars = []
console.log(cars)
cars.push({
    make:"Toyota",
    model:"Camry",
    year:2018
})
console.log(cars)
delete cars[0]
console.log(cars)
cars.push({
    make:"Honda",
    model:"Civic",
    year:2020
})
console.log(cars)
cars[1].model="Accord"
console.log(cars)