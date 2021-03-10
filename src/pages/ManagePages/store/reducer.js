/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	bookList:[],
	orderList:[],
	userList:[],
	showItem:false,
	showNew:false,
	updateNew:false,

});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_BOOK_LIST:
			return state.set('bookList', action.value);
		case constants.GET_ORDER_LIST:
			return state.set('orderList', action.value);
		case constants.GET_USER_LIST:
			return state.set('userList', action.value);
		case constants.CHANGE_HIDE:
			return state.set('showItem',!state.get('showItem'));
		case constants.CHANGE_NEW:
			return state.set("showNew",!state.get('showNew'));
		case constants.CHANGE_UPDATE:
			return state.set("updateNew",!state.get("updateNew"))
		default:
			return state;
	}
}