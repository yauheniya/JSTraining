//The numeric array is given. You should find amount of reps for each element in the array and log it on
//console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
//    1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)

let a = [ 1, 2, 1, 2, 3.14, 4, 2, 1, 2, 2, 8, 8, 1, 4, 1];

function arrayCount (arr) {
    let resultArr = [];

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

    resultArr.forEach((el, i , a)=>{
        console.log(el.number + " - " + el.count);
    });
}

arrayCount(a);