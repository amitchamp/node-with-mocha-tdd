const app = require('./app');

console.log(app.add(''));
console.log(app.add('1'));
console.log(app.add('1,5'));
console.log(app.add('1\n2,3'));
console.log(app.add('//;\n1;2'));
console.log(app.add('//;1;2\n3'));
console.log(app.add('1,2,3,-4'));
console.log(app.add('1,2,3,-4,-5'));
