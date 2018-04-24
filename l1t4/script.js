//Reverse a given number n (123 -> 321). Log the result on console

let num=123456;
function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(num));