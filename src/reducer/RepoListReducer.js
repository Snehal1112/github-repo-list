import { REPO_ERROR, REPO_LIST } from '../actions/action';

const initState = {
	items: [],
	error: undefined
};

export default (state = initState, action) => {
	switch (action.type) {
		case REPO_LIST:
			return {
				...state,
				items: action.payload
			};
		case REPO_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
