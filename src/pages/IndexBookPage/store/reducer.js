/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	imgList: [],
	hotList:[],
	bookList:[],
	newBookList:[],

});

export default (state = defaultState, action) => {

	switch(action.type) {
		case constants.GET_BOOK_LIST:
			return state.merge({
				bookList:fromJS(action.value)
			})
		case constants.GET_NEW_LIST:
			return state.merge({
				newBookList:fromJS(action.value)
			})
		case constants.GET_HOT_LIST:
			return state.merge({
				hotList:fromJS(action.value)
			})
		case constants.GET_BANNER_LIST:
			return state.merge({
				imgList:fromJS(action.value)
			})
		default:
			return state;
	}
}