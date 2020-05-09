const express = require('express');
const control = require('./controller/control');

const app = express();

//设置ejs为模板引擎
app.set('view engine','ejs');

app.get('/:num',(req,res)=>{
    control.showResult(req,res);
});

app.use(express.static('public'));

app.listen(5000);