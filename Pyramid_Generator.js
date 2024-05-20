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