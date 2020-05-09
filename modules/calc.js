//计算有哪些因数
function calc(num){
    const arrList = [];
    for(let i=1;i<=num;i++){
        if(num%i===0){
            arrList.push(i);
        };
    };

    return arrList;
};

exports.calc = calc;