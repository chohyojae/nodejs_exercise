// let reg = /cat/;
// console.log(reg.test("cats and dogs"));
// console.log(reg.test("Cat"));

let reg = /Script/;
let result = reg.exec("JavaScript");
console.log(result[0]);

console.log(result.index);
console.log(result.input);

let dateTimeExp = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;

console.log(dateTimeExp.test("2021-06-03 10:59"));

let header = /<h[1-6]>.*<\/h[1-6]>/;
let header_2 = /<(h[1-6])>.*<\/\1>/;

console.log(header.test("<h1>JavaScript</h1>"));
console.log(header.test("<h1>JavaScript</h2>"));

console.log(header_2.test("<h1>JavaScript</h1>"));
console.log(header_2.test("<h1>JavaScript</h2>"));

