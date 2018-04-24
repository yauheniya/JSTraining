//Find the following sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n for a given n. Log the result on console.

let n=5;
let s=0;

for (let i=1; i<(n+1); i++){
    s+ = 1/i;
}
console.log("s =", s);