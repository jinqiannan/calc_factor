const fs = require('fs');

//判断当前data文件夹下有无已计算的数字
exports.read = function(num,callBack){
    fs.readFile(`./data/${num}.txt`,(err,data)=>{
        if(err){
            callBack(0);
        }else{
            callBack(JSON.parse(data));
        };
    });
};

//写入当前数字的因数
exports.write = function(num,arrList){
    fs.writeFile(`./data/${num}.txt`,JSON.stringify(arrList),{encoding:'utf-8'},(err)=>{
        if(err){
            console.log('写入失败');
        }else{
            console.log('写入成功');
        };
    });
};