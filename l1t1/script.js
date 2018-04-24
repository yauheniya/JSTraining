//Find roots of quadratic equation with the given coefficients a, b, c. Log on console roots or some message, if there are no roots.

let a=2, b=5, c=-3;// 3 -18 27
let d=b^2-4*a*c;

if (d>0){
    console.log("Two roots");
    let x1=(-b+Math.sqrt(d))/(2*a);
    let x2=(-b-Math.sqrt(d))/(2*a);
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}
else if (d==0)
{
    console.log("One root");
    let x1=(-b)/(2*a);
    console.log("x =", x1);
}
else if (d<0)
    console.log("No roots");