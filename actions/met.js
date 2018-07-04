import metUser from '../helpers/metUser';

export function beginMet(uid, mid) {
	return async (dispatch, getState) => {
		let response;

		try {
			response = await metUser(uid, mid);
		} catch (err) {
			return dispatch(metFail('Something went wrong...Try again?'))
		}

			return dispatch(metSuccess(response));
	};

}

export function metSuccess(match) {
	return {
		type: 'MET_SUCCESS',
	}
};

export function metFail(error) {
	return {
		type: 'MET_FAIL',
		error,
	}
};
