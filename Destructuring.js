// problem 1  
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//first it will print "Tesla" and then 'Mercedes' and won't print "Honda"
console.log(randomCar)
console.log(otherRandomCar)

// problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//line 17 will throw an error because name is crossed out 
console.log(name);
console.log(otherName);


// problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//will print   12345 "undefined"(hashedPassword doesn't exit in our person object)
console.log(password);
console.log(hashedPassword);

// problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//will print false and then true
console.log(first == second);
console.log(first == third);

// problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//will print "value", [1,5,1,8,3,3], 1, 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

