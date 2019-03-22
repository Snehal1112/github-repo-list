import { REPO_ERROR, REPO_LIST } from './action';

export const getRepoList = (query = '') => (dispatch) => {
	//const accessToken = "ef89b334254cee7876044a2fd9bd13c417322657";
	fetch(`https://api.github.com/legacy/repos/search/${query}`, {
		// headers: {
		// 	//Authorization: 'token ef89b334254cee78760'
		// 	Authorization: 'token ef89b334254cee7876044a2fd9bd13c417322657'
		// }
	})
		.then((response) => response.json())
		.then((data) => {
			const { message } = data;
			if (message) {
				dispatch({
					type: REPO_ERROR,
					payload: data
				});
			} else {
				dispatch({
					type: REPO_LIST,
					payload: data
				});
			}
		})
		.catch((error) => {
			console.error(error);
		});
};
