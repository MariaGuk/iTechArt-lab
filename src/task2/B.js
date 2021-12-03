// const Robot = (name) => {
//   this.name = name;
//   }  
//Error, because call of the new Robot(arrow func) will generate an error 'Robot is not a constructor'.
//  Arrow functions does not have 'this' ,that is why they can not be used for creating constructor.
// const voltron = new Robot('Voltron');

function Robot(name) {
  this.name = name;
}
function add(number1, number2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (number1 + number2);
}

let voltron = new Robot('Voltron');

console.log(add.apply(this.name, [0, 1]));
console.log(add.apply(voltron, [1, 2]));
console.log(add.apply(voltron, [20, 30]));






