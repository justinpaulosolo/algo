let text = "test";

//escape characters
let newText = "test\"test\"";

let length = newText.length;

let name = "JustinSolo";

// slice() extracts a part of a string and returns a new string
// start , end
let firstName = name.slice(0,6);


let fullName = "Justin Solo";
let lastName = fullName.substr(7,4);

let num = "5";
let padded = num.padEnd(4, 'x');
// 5xxx

let numb = 5;
let text2 = numb.toString();
let padded2 = text2.padEnd(4, "0");
//5000