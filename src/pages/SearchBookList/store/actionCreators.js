import axios from 'axios';
import * as constants from './constants';
const changeSearchBookList=(data)=>({
	type:constants.GET_BOOK_LIST,
	value:data,

})
export const getSearchBookList=(searchName)=>{
	return (dispatch)=>{
		axios.post('/findbook?name='+searchName).then(function(response){
			console.log(response)
			const result=response.data.msg;
			const data = response.data.data;
			if (result==="SUCCESS") {
				dispatch(changeSearchBookList(data));
			
			}else {
				console.log('获取失败')
			}
		})
	}
}

