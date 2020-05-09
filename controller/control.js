const calc = require('../modules/calc');
const file = require('../modules/files');

module.exports.showResult = function(req,res){
    let start = new Date(); //设置开始时间戳
    let {num} = req.params; //获取当前输入的数字
    let arrList = [];
    file.read(num,function(result){
        if(!result){
            arrList = calc.calc(num);
            file.write(num,arrList);
        }else{
            arrList = result;
        };
        res.render('index',{
            num,
            arrList,
            date:new Date - start
        });
    });
    
};