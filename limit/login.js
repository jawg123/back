const joi =require('joi')


// string值只能为字符串
// alpanum值为a-z,0-9,A-Z
// min为最小长度，max为最大长度
// required是必填项
// pattetn是正则表达式


// 账号验证
const account =joi.string().alphanum().min(6).max(12).required()
// 密码验证
const password =joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required()

exports.login_limit ={
	// 表示对req.body里面的数据进行检验
	body:{
		account,
		password
	}
}