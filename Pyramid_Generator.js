/*les1*/
let character;

/*les2*/
let character = "Hello";

/*les3*/
let character = 'Hello';

/*les4*/
let character = 'Hello';
console.log(character);

/*les5*/
let character = 'Hello';
character = "World";
console.log(character);

/*les6*/
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);

/*les7*/
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;

/*les8*/
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);

/*les9*/
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = "Test";
console.log(secondCharacter);

/*les10*/
secondCharacter = character;

/*les11*/
let character = 'Hello';

/*les12*/
let character = 'Hello';
let count = 8;

/*les13*/
let character = 'Hello';
let count = 8;
console.log(count + 1);

/*les14*/
let count = 8;

/*les15*/
let character = 'Hello';
let count = 8;
let rows = [];

/*les16*/
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

/*les17*/
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

/*les18*/
rows[2] = 10;
console.log(rows);

/*les19*/
rows[2] = 10;
rows[rows.length - 1]; //(rows[rows.length - 1] = 10;)

/*les20*/
//просто удалить все

/*les21*/
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);

/*les22*/
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

/*les23*/
let pushed = rows.push("freeCodeCamp");
console.log(pushed);

/*les24*/
//просто удалить все

/*les25*/
let character = "Hello";
let count = 8;
let rows = [];

/*les26*/
const character = "Hello";
const count = 8;
const rows = [];

/*les27*/
const character = "#";
const count = 8;
const rows = [];

/*les28*/
for ("iterator";
    "condition";
    "iteration") {}

/*les29*/
for (let i = 0;
    "condition";
    "iteration") {

}

/*les30*/
for (let i = 0; i < count;
    "iteration") {

}

/*les31*/
let i = 1;
for (let i = 0; i < count; i = i + 1) {

}

/*les32*/
for (let i = 0; i < count; i = i + 1) {
    console.log(i);
}

/*les33*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(i);

}

/*les34*/
let result = "";

/*les35*/
console.log(result);

/*les36*/
for (const row of rows) {}

/*les37*/
for (const row of rows) {
    result = result + row;
}

/*les38*/
for (const row of rows) {
    result = result + "\n" + row;
}

/*les39*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
}

/*les40*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i))
}

/*les41*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
}

/*les42*/
function padRow() {}

/*les43*/
function padRow() {

}
padRow();

/*les44*/
const call = padRow();

/*les45*/
function padRow() {

}
const call = padRow();
console.log(call);

/*les46*/
function padRow() {
    return ("Hello!");
}

/*les47*/
function padRow(name) {
    return "Hello!";
}

/*les48*/
function padRow(name) {
    return (name);
}

/*les49*/
const call = padRow("name");

/*les50*/
function padRow(name) {
    return character + name;
}

/*les51*/
function padRow(name) {
    return character + name;
    const test = "Testing";
}

/*les52*/
function padRow(name) {
    const test = "Testing";
    return character + name;
}

/*les53*/
function padRow(name) {
    const test = "Testing";
    return test;
}

/*les54*/
function padRow() {
    const test = "Testing";
    return test;
}
const call = padRow();
console.log(call);

/*les55*/
function padRow() {

}
const call = padRow();
console.log(call);

/*les56*/
function padRow() {

}

/*les57*/
function padRow(rowNumber, rowCount) {

}

/*les58*/
function padRow(rowNumber, rowCount) {
    return (character.repeat(rowNumber));
}

/*les59*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow())
}

/*les60*/
for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count))
}

/*les61*/
function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " ";
}

/*les62*/
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

/*les63*/
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/*les64*/
for (let i = 0; i < count; i += 1) {}

/*les65*/
for (let i = 0; i < count; i++) {}

/*les66*/
for (let i = 1; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

/*les67*/
for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
}

/*les68*/
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

/*les69*/
//change another loop
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

/*les70*/
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*les71*/
if (true) {
    console.log("Condition is true");
}

/*les72*/
if (false) {
    console.log("Condition is true");
}

/*les73*/
if ("false") {
    console.log("Condition is true");
}

/*les74*/
if ("") {
    console.log("Condition is true");
}

/*les75*/
let continueLoop = false;
let done = 0;

/*les76*/
let continueLoop = false;
let done = 0;
while (continueLoop) {}

/*les77*/
while (continueLoop) {
    done++;
}

/*les78*/
while (continueLoop) {
    done++;
    if (done == count) {}
}

/*les79*/
if (done === count) {

}

/*les80*/
if (done === count) {
    continueLoop = false;
}

/*les81*/
rows.push(padRow(done, count));

/*les82*/
while (done !== count) {
    done++;
    rows.push(padRow(done, count));
    if (done === count) {
        continueLoop = false;
    }
}

/*les83*/
while (done !== count) {
    done++;
    rows.push(padRow(done, count));
}

/*les84*/
let done = 0;

while (done !== count) {
    done++;
    rows.push(padRow(done, count));
}

/*les85*/
let done = 0;

while (done <= count) {
    done++;
    rows.push(padRow(done, count));
}

/*les86*/
let done = 0;

while (rows.length <= count) {
    done++;
    rows.push(padRow(done, count));
}

/*les87*/
let done = 0;

while (rows.length < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}

/*les88*/
while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

/*les89*/
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*les90*/
for (let i = count; false; false) {

}

/*les91*/
for (let i = count; i > 0; false) {

}

/*les92*/
for (let i = count; i > 0; i = i - 1) {

}

/*les93*/
for (let i = count; i > 0; i = i - 1) {
    rows.push(padRow(i, count))
}

/*les94*/
for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
}

/*les95*/
for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

/*les96*/
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*les97*/
const numbers = [1, 2, 3];
console.log(numbers);

/*les98*/
const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);

/*les99*/
const numbers = [1, 2, 3];
const shifted = numbers.shift()
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);

/*les100*/
//просто удалить все

/*les101*/
// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*les102*/