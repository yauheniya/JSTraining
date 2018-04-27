//The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log on console both arrays.
var a = [0, -1, -1, 2, -5, -7, 4, 8, 3];
var b=[], c=[];
a.forEach((el, i, a)=>{
    if (el>=0) b.push(el);
    else c.push(el);
});
console.log("a", a);
console.log("b", b);
console.log("c", c);
