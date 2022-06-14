const my_dictionary = new Map()
my_dictionary.set('oi', 'oi tudo bem?')
my_dictionary.set('blz', 'beleza')
my_dictionary.set('vc', 'você')

my_dictionary.delete('vc')

console.table(my_dictionary)

//console.table(my_dictionary)

//const palavra = my_dictionary.get('blz')
//console.log(palavra)

/*const summary = [
    ['thiago', '11998080897'],
    ['elaine', '11987878787'],
    ['chrystiano', '11955524358']
]

my_dictionary.set(summary[0], {birthdate: '08/08/1997'})
my_dictionary.set(summary[1], {birthdate: '27/05/1997'})
my_dictionary.set(summary[2], {birthdate: '12/06/1997'})

console.table(my_dictionary)*/