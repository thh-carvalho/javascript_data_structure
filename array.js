const flags = [
    ['Brazil', ['Green', 'Yellow', 'blue']],
    ['Canada', ['Red', 'White']],
    ['Mexico', ['Green', 'White', 'Red']],
    ['USA', ['Blue', 'White', 'Red']]
];

//console.log(flags[2][1][1])

//Methods os an array
let fruits = new Array('Pineapple')
fruits.push('apple') //Add an element in an array
fruits.push('orange')
fruits.unshift('lemon') //Add an element in the first position of an array
//console.table(fruits)
//console.log(fruits.length)
//fruits.pop() //Exclude the last element of an array
//fruits.shift() //Exclude the first element of an array
//const removed_fruit = fruits.splice(2, 1)

const social_media = [
    'Instagram',
    'Youtube',
    'Facebook',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Pinterest',
];

//Position os an element in an array
const tiktok = social_media.indexOf('TikTok')
//console.log(tiktok)

//Checking if an social media it's included in an array
//console.log(social_media.includes('Tumblr'))

//List an array
for (let i = 0; i < social_media.length; i++){
    //console.log(social_media[i])
}

//For in
for(const i in social_media){
    //console.log(`${i}: ${social_media[i]}`)
}

//For of
for (const value of social_media){
    //console.log(value)
}

//ForEach
social_media.forEach((value, index, arr) => {
    //console.log(`Value: ${value}\nindex: ${index}\nArray: ${arr}`)
})

//Map
const pay_in_real = [10, 20, 40, 100]
const dolar_price = 5
const pay_in_dolar = pay_in_real.map((value) => value * dolar_price)

//console.table(pay_in_dolar)

//Filter
const filter_test = pay_in_real.filter((value) => value > 30)
//console.table(filter_test)

//Find retun the value
const find_test = pay_in_real.find((value) => value > 30)
//console.table(find_test)

//Reduce
const reduce_test = pay_in_real.reduce((ac, value) => ac + value)
//console.table(reduce_test)

//Every
const every_test = pay_in_real.every((value) => value < 10)
//console.table(every_test)

//Some
const some_test = pay_in_real.some((value) => value > 1000)
//console.table(some_test)

//Concat
const concat_test = pay_in_real.concat(pay_in_dolar)
//console.table(concat_test)

//fill
concat_test.fill(0)
//console.table(concat_test)

//flat
const values = [10, 20, 30, 40, [1, 2, 3, 4]]
const new_values = values.flat()
//console.table(new_values)

//Sort
const clients = [['Thiago', 5], ['Henrique', 5], ['Elaine', 3], ['Chrystiano', 4], ['Marlene', 2]]
clients.sort((a, b) => b[1] - a[1])
console.table(clients)
const numbers = [100, 1.9, 20, 0, 2]
numbers.sort((a, b) => a - b)
//console.table(numbers)