//Implement a function with two string arguments, which returns true if the given strings are anagrams, and
//false otherwise. Anagrams are the strings, which consist of the same symbols, but perhaps in a different
//order. For example ‘melon’ and ‘lemon’ are anagrams, but ‘ball’ and ‘lab’ - no, because they have different
//amounts of letter ‘l’.
let a = 'qwerty';
let b = 'yTreWq';
let c = 'qwertyuio';

function isAnagram(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    let arrA = a.split('');
    let arrB = b.split('');

    arrA = arrA.sort();
    arrB = arrB.sort();

    return JSON.stringify(arrA) === JSON.stringify(arrB);
}

console.log(`Are ${a} and ${b} anagrams: ${isAnagram(a, b)}`);
console.log(`Are ${a} and ${c} anagrams: ${isAnagram(a, c)}`);
console.log(`Are ${c} and ${b} anagrams: ${isAnagram(c, b)}`);