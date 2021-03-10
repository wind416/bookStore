import axios from 'axios';
import * as constants from './constants';
import { createHashHistory } from 'history'
const changeLogin = (data) => ({
	type: constants.CHANGE_LOGIN,
	value: true,
	isManage:data.role,
	userInfo:data
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})
export const register = (user) => {
	return (dispatch) => {
		console.log("发注册登录")
		axios({
			url:'/register',
			method:"post",
			data:user
		}).then((res) => {
		
			const result = res.data.msg;
			console.log("注册")
			if (result==="SUCCESS") {
				console.log("register success")

				
			
			}else {
				alert('注册失败')
			}
		})
	}
}
export const loginOUt=()=>{
	return (dispatch)=>{
		axios.post("/logout").then(function (res) {
			const result = res.data.msg;
			
			if (result==="SUCCESS") {
				dispatch(logout());
			
			}else {
				alert('登陆失败')
			}
		})
	}
}
export const login = (phone, password) => {
	return (dispatch) => {
		axios.post('/login?phone=' + phone + '&password=' + password).then((res) => {
		
			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				dispatch(changeLogin(data));
			
			}else {
				alert('登陆失败')
			}
		})
	}
}