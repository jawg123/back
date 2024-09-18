// 导入express框架
const express =require('express');
const app =express();
// 导入body-parser
var bodyParser = require('body-parser');
// 导入cors
const cors =require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
// 当extended为false时，值为数组或字符串，当为true是，值可以为任意类型
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 绑定和侦听指定的端口
app.listen(3007, () => {
	console.log('http://127.0.0.1:3007')
})