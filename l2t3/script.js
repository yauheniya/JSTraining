//Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same array in one script.js file.

var a1 = [0, -1, -1, 2, -5, -7, 4, 8, 3];
var a2 = [ 1, 2, 1, 2, 3.14, 4, 2, 1, 2, 2, 8, 8, 1, 4, 1];

function arrayDivision (arr) {
    var b=[], c=[];
    arr.forEach((el, i, a)=>{
        if (el>=0) b.push(el);
        else c.push(el);
    });
    console.log("a", arr);
    console.log("b", b);
    console.log("c", c);
}

function arrayCount (arr) {
    var resultArr = [];

    arr.forEach((el, i, a)=>{
        if (resultArr.length === 0){
            resultArr.push({number: el, count: 1});
        }
        else {
            let flag=false;
            for (let j=0; j<resultArr.length; j++){
                if (resultArr[j].number === el) {
                    resultArr[j].count += 1;
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                resultArr.push({number: el, count: 1});
            }
        }
    });

    console.log(resultArr);

    resultArr.forEach((el, i , a)=>{
        console.log(el.number + " - " + el.count);
    });
}

arrayDivision(a1);
arrayDivision(a2);
arrayCount(a1);
arrayCount(a2);