/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	comment: [],
	buySuccess:false,
	bookInfo:{},
	bookimg:{},
	commentSuccess:false

});
const getBookData = (state, action) => {
	return state.merge({
		bookimg: action.bookimg,
		bookInfo: action.book,
		comment:fromJS(action.comment),
	});
};
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_BOOK_INFO:
			return getBookData(state,action)
		case constants.LOGOUT:
			return state.set('login', action.value);
		case constants.BUY_SUCCESS:
			return state.set("buySuccess",action.value)
		case constants.SUCCESS_COMMENT:
			return state.set("commentSuccess",action.value)
		default:
			return state;
	}
}