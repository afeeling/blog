var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
//设置默认的模板引擎
app.set('view engine', 'ejs');
app.set('views', './views');





//注册路由
fs.readdir(path.join(__dirname, '/router'), (err, files) => {
    if (err) throw err.message;
    files.forEach(function(file) {
        var filePath = path.join(__dirname, '/router', file);
        app.use(require(filePath));
    })
});
//托管静态资源
app.use('/node_modules', express.static('node_modules'));
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})