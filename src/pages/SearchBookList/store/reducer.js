/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	searchBookList:[],

});


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_BOOK_LIST:
			return state.set("searchBookList",action.value)
		default:
			return state;
	}
}