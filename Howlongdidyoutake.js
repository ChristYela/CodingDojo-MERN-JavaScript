/////////////////////////// Prime Finder ///////////////////////////////////
Number.prototype.isPrime = function() {
    var q = Math.sqrt(this);
    for( let i=2; i<= q; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2 ; // for math reasons, 1 is considered prime


while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

/* The 10,000th prime number is 104729 without sqrt  
This took 45807.48420000076 milliseconds to run: 45.892 seconds */

/* The 10,000th prime number is 104729 with sqrt  //In Python: The 10000-th prime is: 104729 in 0.211 seconds
This took 157.58390003442764 milliseconds to run : 0.232 seconds */

/* The 100,000th prime number is 1299709 with sqrt //In Python: The 100000-th prime is: 1299709 in 2.186 seconds
This took 4854.23869997263 milliseconds to run : 4.98 seconds */

/* The 1,000,000th prime number is 15485863 with sqrt // In Python: The 1000000-th prime is: 15485863 in 35.858 seconds
This took 158598.16780000925 milliseconds to run: 158.672 seconds  */ 


////////////////////////////fibonacci//////////////////////////////////////////
const { performance } = require('perf_hooks');

// recursive
const start4 = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(29);

console.log(`Fib recursion took ${performance.now() - start4} milliseconds to run for 20.`);


// iterative
const start5 = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

console.log(`Fib iteration took ${performance.now() - start5} milliseconds to run for 20.`);

/* Fib recursion took 17.422100007534027 milliseconds to run for 20.
Fib iteration took 0.0359000563621521 milliseconds to run for 20. */

/* Fib thru Iteration is faster than recursion */

/////////////////////////Reverse string ////////////////////////////
const { performance } = require('perf_hooks');
const start6 = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`reversed1 took ${performance.now() - start6} milliseconds to run`);

console.log("--------------------------------------");

const start7 = performance.now();
function reversed2(str) {
let reversedString = "";
for (i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
}
return reversedString;
}
console.log(reversed2(story))
console.log(`reversed2 took ${performance.now() - start7} milliseconds to run`);

/* !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
reversed1 took 2.5372999906539917 milliseconds to run
-------------------------------------- */
/* !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
reversed2 took 8.978500008583069 milliseconds to run */

/* the first way is faster than the second one */