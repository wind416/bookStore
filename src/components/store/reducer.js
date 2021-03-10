/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';
const login=sessionStorage.getItem("login")||false;
const phone=sessionStorage.getItem("phone")||'';
const isManage=sessionStorage.getItem("isManage")||1;
const defaultState = fromJS({
	login,
	isManage,
	phone,
	userInfo:{}
	// searchBookByNameList:[]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			sessionStorage.setItem("login",action.value);
			sessionStorage.setItem('phone',action.userInfo.phone);
			sessionStorage.setItem("isManage",action.isManage)
			return state.merge({
					login:action.value,
					isManage:action.isManage,
					userInfo:action.userInfo,
					phone:action.userInfo.phone
			});
		case constants.LOGOUT:
			sessionStorage.setItem("login",action.value);
			sessionStorage.setItem("phone",'');
			sessionStorage.setItem("isManage",1)
			return state.merge({
				login:action.value,
				userInfo:{},
				isManage:1,
				phone:''
			})
		// case constants.GET_SEARCH_BOOK_LIST:
		// 	return state.set("searchBookByNameList",action.value)
		default:
			return state;
	}
}