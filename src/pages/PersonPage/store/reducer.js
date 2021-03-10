/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	user:{},
	usergusLike:[],
	userrecentOrder: [],
	allOrder:[]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_USER_LIKE:
			return state.merge({
				usergusLike:fromJS(action.value)
			})
		case constants.GET_USER:
			return state.merge({
				user:action.value
		})
		case constants.GET_RECENT_ORDER:
			return state.merge({
				userrecentOrder:fromJS(action.value)
			})
			
		case constants.CHANGE_PERSON:
			return state.set("user",action.user)
		case constants.GET_ALL_ORDER:
			return state.set("allOrder",action.value)
		default:
			return state;
	}
}