import axios from 'axios';
import * as constants from './constants';
export const buySuccess=(value)=>({
	type:constants.BUY_SUCCESS,
	value:value

})
const changeBookInfo=(data)=>({
	type:constants.GET_BOOK_INFO,
	bookimg:data.bookimg,
	book:data.book,
	comment:data.comment

})
export const changeSuccessComment=(value)=>({
	type:constants.SUCCESS_COMMENT,
	value
})
export const commentBook=(data)=>{
	return (dispatch)=>{
		axios({
			url:"/comment",
			method:"post",
			data:data
		}).then(function(response){
				const result=response.data.msg;
			
				if (result==="SUCCESS") {
					console.log("成功")
				
				}else {
					alert('获取书籍信息失败')
				}
		})
	}

}
export const getBookInfo=(bid)=>{
	return (dispatch)=>{
		axios({
			url:"/detail?bid="+bid,
			method:"post",
		}).then(function(response){
				const result=response.data.msg;
				const data=response.data.data;
				if (result==="SUCCESS") {
				   dispatch(changeBookInfo(data))
				
				}else {
					alert('获取书籍信息失败')
				}
		})
	} 
}

export const buyBook=(phone,bid)=>{
	return (dispatch)=>{
		axios({
			url:"/purchase?uid="+phone+"&bid="+bid,
			method:"post",
		}).then(function(response){
				const result=response.data.msg;
				if (result==="SUCCESS") {
					console.log("成功")
					dispatch(buySuccess(true))
				
				}else {
					alert('获取信息失败')
				}
		})
	} 
}