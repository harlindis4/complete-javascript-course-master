const myCountry = {
  country : 'Albania',
  capital: 'Tirana',
  language: 'Albanian',
  population: '2.5',
  neighbours: ['Mali i Zi', 'Kosova', 'Greqia', 'Maqedonia'],
  describe: function(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} and a capital called ${this.capital}`);
  },
  checkIsland: function(){
    this.island = this.neighbours.length === 0 ? true : false;
  }

}

console.log(this.describe());



//'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} and a capital called ${myCountry.capital}`);

myCountry.population += 2;
myCountry[population] -= 2;

//for loop
for(let i = 1; i<=50; i++){
  console.log(`Voter number ${i} is currently working`);
}

//const populations = [34,56,78,2];
const percentages2 = [];

function perctentageOfWorld1(population){
  return population/7900;
}

for(let i=0; i<populations.length; i++){
  percentages2[i] = perctentageOfWorld1(populations[i]);
}

console.log(percentages2);

//looping backwards and loops in loops
const listOfNeigbhours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];

for(let i=0; i<listOfNeigbhours.length; i++){
  for(let y = 0; y < listOfNeigbhours[i].length; y++){
    console.log(`Neighbour: ${listOfNeigbhours[i][y]}`);
  }
}

const populations = [34,56,78,2];
const percentages3 = [];

let i = 0;
while(i<populations.length){
  percentages3[i] = perctentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3);





