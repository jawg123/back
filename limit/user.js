const joi =require('joi')


// string值只能为字符串
// alpanum值为a-z,0-9,A-Z
// min为最小长度，max为最大长度
// required是必填项
// pattetn是正则表达式

const id =joi.required()
const name = joi.string().pattern(/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/).required();
const email =joi.string().pattern(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/).required();
const oldPassword =joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required();
const newPassword =joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required();

exports.password_limit ={
	// 表示对req.body里面的数据进行检验
	body:{
		id,
		oldPassword,
		newPassword
	}
}

exports.name_limit ={
	// 表示对req.body里面的数据进行检验
	body:{
		id,
		name
	}
}

exports.email_limit ={
	// 表示对req.body里面的数据进行检验
	body:{
		id,
		email
	}
}