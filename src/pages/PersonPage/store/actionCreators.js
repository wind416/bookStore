import axios from 'axios';
import * as constants from './constants';

const changeALLOrder = (data) => ({
	type: constants.GET_ALL_ORDER,
	value: data
})
const changePerson=(data)=>({
	type:constants.CHANGE_PERSON,
	user:data.user
})
// const changePersonList=(data)=>({
// 	type:constants.GET_PERSONDATA,
// 	user:data[1],
// 	usergusLike:data[0],
// 	userrecentOrder: data[2]
// })
const changeUser=(data)=>({
	type:constants.GET_USER,
	value:data

})
const changeRecentOrder=(data)=>({
	type:constants.GET_RECENT_ORDER,
	value:data
})
const changeGusLike=(data)=>({
	type:constants.GET_USER_LIKE,
	value:data
	
})

export const updatePersonInfo=(user)=>{
	return (dispatch)=>{
		axios.post('/info/update?user='+JSON.stringify(user)).then(function (response) {
	
			const data=response.data.data;
			
			const result = response.data.msg;
			if (result==="SUCCESS") {
				dispatch(changePerson(data));
			}else {
				console.log('获取失败')
			}
		})
	}
}
export const getUserInfo=(phone)=>{
	return (dispatch)=>{
		axios.post('/info/detail?phone='+phone).then(function (response) {
			const data=response.data.data;
			
			const result = response.data.msg;
			if (result==="SUCCESS") {
				dispatch(changeUser(data));
			}else {
				console.log('获取失败')
			}
		  })
	}
}
export const getRecentOrder=(phone)=>{
	return (dispatch)=>{
		axios.post('/info/showorders?phone='+phone).then(function (response) {
			const data=response.data.data;
			
			const result = response.data.msg;
			if (result==="SUCCESS") {
				dispatch(changeRecentOrder(data));
			}else {
				console.log('获取失败')
			}
		  })
	}
}
export const getGusLike=()=>{
	return (dispatch)=>{
		axios.post('/info/gussesulike').then(function (response) {
			const data=response.data.data;
			
			const result = response.data.msg;
			console.log("传过来的guslike ")
			console.log(data)
			if (result==="SUCCESS") {
				dispatch(changeGusLike(data));
			}else {
				console.log('获取失败')
			}
		  })
	}
}
// export const getPersonList=(phone)=>{
// 	return (dispatch)=>{
// 		axios.post('/info?phone='+phone).then(function(response){

// 			const data=response.data.data;
// 			const result = response.data.msg;
			
// 			console.log("user "+data[0],"like "+data[1],"order "+data[2])
// 			if (result==="SUCCESS") {
// 				dispatch(changePersonList(data));
// 			}else {
// 				console.log('获取失败')
// 			}
// 		})
// 	}
// }
export const getALLOrder = (phone) => {
	return (dispatch) => {
		axios.post('/info/orders?phone=' + phone ).then((res) => {
			const data=res.data.data;
			const result = res.data.msg;
			if (result) {
				dispatch(changeALLOrder(data));
			
			}else {
				alert('登陆失败')
			}
		})
	}
}