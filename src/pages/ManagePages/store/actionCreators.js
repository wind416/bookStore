import axios from 'axios';
import * as constants from './constants';

const getBook = (data) => ({
	type: constants.GET_BOOK_LIST,
	value:data
})
const getUser = (data) => ({
	type: constants.GET_USER_LIST,
	value:data
})
const getOrder = (data) => ({
	type: constants.GET_ORDER_LIST,
	value:data
})
//在新建书籍窗口显示更多需填写字段
export const changeHide=()=>({
    type:constants.CHANGE_HIDE
})
//显示新建书籍窗口
export const showNew=()=>({
    type:constants.CHANGE_NEW
})
//显示更新书籍窗口
export const showUpdate=()=>({
    type:constants.CHANGE_UPDATE
})
export const getUserList = (accout, password) => {
	return (dispatch) => {
		axios.post('/usermanage/users').then((res) => {

			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				console.log("get user success")
				dispatch(getUser(data));
			
			}else {
				alert('失败')
			}
		})
	}
}
export const searchuser=(phone)=>{
	return (dispatch)=>{
		axios({
			url:"/usermanage/searchuser?phone="+phone,
			method:'post',
		
		}).then(function (response) {
			const result = response.data.msg;
			const data=response.data.data;
			if (result==="SUCCESS") {
				console.log("searcg user success")
				dispatch(getUser(data));
			
			}else {
				alert('失败')
			}
		})
	}
}
export const getBookList = () => {
	return (dispatch) => {
		axios.post('/bookmanage/books').then((res) => {

			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				console.log("manager book list success")
				dispatch(getBook(data));
			
			}else {
				alert('失败')
			}
		})
	}
}
export const searchbook=(name)=>{
	return (dispatch)=>{
		axios({
			url:'/bookmanage/searchbook?name='+name,
			method:'post',
		
		}).then(function(res) {
			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				console.log("search book success")
				dispatch(getBook(data));
			
			}else {
				alert('失败')
			}
		})
	}
}
//添加书籍提交-------------------------
export const submitBook=(book)=>{
	return (dispatch)=>{
		axios({
			url:"/bookmanage/add",
			method:"post",
			data:book
		}).then(function (res) {
			const result = res.data.msg;
			console.log(res);
			if(result==="SUCCESS"){
				getBookList();
				dispatch(showNew())
				
			}else{
				alert("添加失败");
			}
			
		})
	}
}
////更新-------------------------
export const updateBook=(book)=>{
	return (dispatch)=>{
		axios({
			url:"/bookmanage/update",
			method:"post",
			data:book
		}).then(function (res) {
			const result = res.data.msg;
			if(result==="SUCCESS"){
				getBookList();
				dispatch(showUpdate())
				
			}else{
				alert("更新失败");
			}
		})
	}
}
//删除书籍
export const deleteBook=(id)=>{
	return (dispatch)=>{
		axios({
			url:"/bookmanage/del?id="+id,
			method:"post",
	
		}).then(function (res) {
			const result = res.data.msg;
			console.log("删除result  "+result)
			if(result==="SUCCESS"){
				console.log("删除")
				getBookList();
			}else{
				alert("更新失败");
			}
		})
	}
}
export const getOrderList = () => {
	return (dispatch) => {
		axios.post('/ordermanage/orders').then((res) => {

			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				console.log("order success")
				dispatch(getOrder(data));
			
			}else {
				alert('失败')
			}
		})
	}
}
export const searchorder=(oid)=>{
	return (dispatch)=>{
		axios({
			url:'/ordermanage/searchorder?oid='+oid,
			method:'post',
	
		}).then(function (res) {
			const result = res.data.msg;
			const data=res.data.data;
			if (result==="SUCCESS") {
				dispatch(getOrder(data));
			
			}else {
				alert('失败')
			}
		})
	}
}