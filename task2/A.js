// Part 1
window.x = 1;
const context = { x: 2 };

//Error Arrow functions does not have 'this'
function testThis(y) {
  console.log(`x=${this.x}, y=${y}`);
}

testThis(100);

const boundFunction = testThis.bind(context, 100)();


// Part 2 Bind 
const human = { name: 'Bob', age: 36 };
function info(phone, email) {
  console.log(`Имя:${this.name}, Возраст:${this.age}, Тел:${phone}, email:${email}`)
};

function myBind(func, context, ...rest) {
  return function () {
    const uniqId = Date.now().toString;

    context[uniqId] = func;

    const result = context[uniqId](...rest);
    return result;
  };
};

myBind(info, human, '111111', 'asd@mail.ru')();