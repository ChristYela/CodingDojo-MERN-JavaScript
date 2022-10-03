// 1
console.log(hello);                                   
var hello = 'world';  
// 1 AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);
// hello = "world";
/// Output = "undefined"
//compare-guessed it right


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// 2 AFTER HOISTING BY THE INTERPRETER
// var needle;
// needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
/// Output = magnet
//compare-guessed it right(haystack got replaced by magnet)


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//3 AFTER HOISTING BY THE INTERPRETER
    // var brendan;
    // brendan = 'super cool';
    // function print() {
    //   brendan = 'only okay';
    //   console.log(brendan);
    // }
    // console.log(brendan);
    // Output = 'super cool'. The function is not called on so it never changes the var.
    //compare-printed "super cool" (thought it would be like top example)


//4 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//4 AFTER HOISTING BY THE INTERPRETER
    // var food;
    // food = 'chicken';
    // console.log(food);
    // eat();
    // function eat() {
    //   var food;
    //   food = 'half-chicken';
    //   console.log(food);
    //   food = 'gone';
    // }
    // Output: chicken, half-chicken
    //compare-guessed it right


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// 5 AFTER HOISTING BY THE INTERPRETER
    // var mean;
    // mean(); <--- stops here
    // console.log(food);
    // mean = function () {
    //   food = "chicken";
    //   console.log(food);
    //   var food = "fish";
    //   console.log(food);
    // }
    // console.log(food);
    //Output: TypeError: "mean is not a function" error
    //compare i knew there was something off about mean()  (console says mean is not a function)


// 6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// 6 AFTER HOISTING BY THE INTERPRETER
    // var genre;
    // console.log(genre);
    // genre = "disco";
    // rewind();
    // function rewind() {
    //   genre = "rock";
    //   console.log(genre);
    //   var genre = "r&b";
    //   console.log(genre);
    // }
    // console.log(genre);
    // Output: undefined, rock, r&b, disco
    //compare-guess it right except last part. 
    //thought it would log last genre but it went back to the top and called on genre which is "disco"


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// 7 AFTER HOISTING BY THE INTERPRETER
    // var dojo;
    // dojo = "san jose";
    // console.log(dojo);
    // learn();
    // function learn() {
    //   dojo = "seattle";
    //   console.log(dojo);
    //   var dojo = "burbank";
    //   console.log(dojo);
    // }
    // console.log(dojo);
    // Output: san jose, seattle, burbank, san jose
    //compare-guessed it right


//8 bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// 8 AFTER HOISTING BY THE INTERPRETER
    // var makeDojo;
    // console.log(makeDojo("Chicago", 65));
    // console.log(makeDojo("Berkeley", 0));
    // function makeDojo(name, students) {
    //   const dojo = {};
    //   dojo.name = name;
    //   dojo.students = students;
    //   if (dojo.students > 50) {
    //     dojo.hiring = true;
    //   }
    //   else if (dojo.students <= 0) {
    //     dojo = "closed for now"; <-- can't redefine a const variable
    //   }
    //   return dojo;
    // }
    // Output: { name: 'Chicago', students: 65, hiring: true } 
    //dojo = "closed for now" 
    //     ^    
    //TypeError: Assignment to constant variable
    //compare-printed first makeDojo but not in the way i thought, didnt even get to second makeDojo


