let sentence1 = "Hello World LOL";
let sentence2 = "Hello World LOL World";

let replaceWith = "you";
let replace = "World";

console.log("The sentence is '" + sentence2 + "' we're replacing '" + replace + "' with '" + replaceWith + "'");


function replaceall(sentence, replaceWith, replace) {
    return (sentence.split(replace).join(replaceWith));
}
console.log(replaceall(sentence2, replaceWith, replace));

//CONCAT FUNCTION
console.log("This fucntion acts as a concat function");
function Concat(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += " " + arr[i];

    }

    return str;
}

let arr = ["Hello", "World", "!"]
console.log(Concat(arr));


// THIS IS JUST FOR TESTING PURPOSES

console.log("The sentence is '" + sentence1 + "' we're replacing '" + replace + "' with '" + replaceWith + "'");
function replaceFirstOcc(sentence, replaceWith, replace) {
    let index = replace.length - sentence.indexOf(replace);
    let split = sentence.split(replace);
    split.splice(index, 0, replaceWith);
    sentence = split.join('');
    //console.log(split);
    console.log(sentence);

}

replaceFirstOcc(sentence1, replaceWith, replace);
