//Check whether a given number is prime. Log on console true or false.

let num=23;
if ((num%2==0)&&(num!=2))
    console.log("The number " + num + " is not prime");
else if (num==2)
    console.log("The number " + num + " is not prime");
else{
    let k=Math.round(Math.sqrt(num));
    let flag = false;

    for(let i=2; i<k+1; i++)
        if(num%i==0)
        {
            console.log("The number " + num + " is not prime");
            flag = true;
            break;
        }

    if (flag == false)
        console.log("The number " + num + " is prime");
}