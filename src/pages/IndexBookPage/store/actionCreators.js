import axios from 'axios';
import * as constants from './constants';
// const changeIndexList=(data)=>({
// 	type:constants.IndexList,
// 	imgList:data.imgList,
// 	hotList:data.hotList,
// 	bookList:data.bookList,
// 	newBookList:data.newBookList
// })
const changeNewBookList=(data)=>({
	type:constants.GET_NEW_LIST,
	value:data
})
const changeBookList=(data)=>({
	type:constants.GET_BOOK_LIST,
	value:data
})

const changeHotList=(data)=>({
	type:constants.GET_HOT_LIST,
	value:data
})
const changeBannerList=(data)=>({
	type:constants.GET_BANNER_LIST,
	value:data
})

export const getHotList=()=>{
	return (dispatch)=>{
		axios.post('/hotlist').then(function (response) { 
			const result=response.data.msg;
			const data = response.data.data;
			
			if (result==="SUCCESS") {
				
				dispatch(changeHotList(data));
			
			}else {
				console.log('获取失败')
			}

		 })
	}
}
export const getNewBookList=()=>{
	return (dispatch)=>{
		axios.post('/newlist').then(function (response) { 
			const result=response.data.msg;
			const data = response.data.data;
			if (result==="SUCCESS") {
	
				dispatch(changeNewBookList(data));
			
			}else {
				console.log('获取失败')
			}

		 })
	}
}
export const getBookList=()=>{
	return (dispatch)=>{
		axios.post('/booklist?pagenum='+ 1+'&pagesize='+8).then(function (response) { 
			const result=response.data.msg;
			const data = response.data.data;
			console.log("boolist 传过来的数据 "+data);
			
			if (result==='SUCCESS') {
		
				dispatch(changeBookList(data));
			
			}else {
				console.log('获取失败')
			}

		 })
	}
}
export const getBannerList=()=>{
	return (dispatch)=>{
		axios.post('/banner').then(function (response) { 
			const result=response.data.msg;
			const data = response.data.data;
			if (result==="SUCCESS") {
			
				dispatch(changeBannerList(data));
			
			}else {
				console.log('获取失败')
			}

		 })
	}
}
// export const getIndexList=()=>{
// 	return (dispatch)=>{
// 		axios.get('./api/home.json').then(function(response){
// 			const result = response.data.data;
// 			if (result) {
// 				dispatch(changeIndexList(result));
			
// 			}else {
// 				console.log('获取失败')
// 			}
// 		})
// 	}
// }

