//Object
const developer = {
  name: "Thiago",
  age: "24",
  language: ["Javascript", "Python", "Java"],
  expirience_years: 2,
};

//console.table(developer)
//console.log(developer.language[0])

//Class's
class Developer {
  constructor(name, age = null, language = [], expirience_years = null) {
    this.name = name;
    this.age = age;
    this.language = language;
    this.expirience_years = expirience_years;
  }
}

const pearson = new Developer("Thiago", 24, ["Javascript", "Python", "Java"], 2);

//console.table(pearson)

for( const props in pearson){
    console.log(`${props}: ${pearson[props]}`)
}
