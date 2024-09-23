// 导入express框架
const express =require('express');
const app =express();
const Joi =require('joi');
// 导入body-parser
var bodyParser = require('body-parser');

// 导入cors
const cors =require('cors');
app.use(cors());

// Multer是一个node.js中间件，用于处理multipart/form-data类型的表单数据，主要用于上传文件
const multer =require('multer');
// 在server服务器下新建一个public文件，在文件中新建upload文件用于存放视频
const upload =multer({dest:'./public/upload'})
app.use(upload.any())
// 静态托管
app.use(express.static("./public"));

// parse application/x-www-form-urlencoded
// 当extended为false时，值为数组或字符串，当为true是，值可以为任意类型
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req,res,next) =>{
	// status=0为成功，=1是失败，默认为1，方便处理失败的情况
	res.cc =(err,status=1)=>{
		res.send({
			status,
			// 判断这个error是错误对象还是字符串
			message:err instanceof Error ? err.message : err
		})
	}
	next()
})

const jwtconfig =require('./jwt_config/index.js');

const {expressjwt:jwt} =require('express-jwt');
// app.use(jwt({
// 	secret:jwtconfig.jwtSecretKey,algorithms:['HS256']
// }).unless({
// 	path:[/^\/api\//]
// }))

const loginRouter =require('./router/login.js');
app.use('/api',loginRouter);
const userRouter =require('./router/userinfo.js');
app.use('/user',userRouter);

// 对不符合joi规则的情况进行报错
app.use((req,res,next,err) =>{
	if(err instanceof Joi.ValidationError) return res.cc(err)
})

// 绑定和侦听指定的端口
app.listen(3007, () => {
	console.log('http://127.0.0.1:3007')
})