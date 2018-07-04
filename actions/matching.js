import matchUser from '../helpers/matchUser';

export function beginMatching(uid, orgCode) {
return async (dispatch, getState) => {
	var response;

	try {
		response = await matchUser(uid, orgCode);
	} catch (err) {
		return dispatch(matchFail('Something went wrong...Try again?'));
	}
	console.log("response:",response)
		if(response) {
			return dispatch(matchSuccess(response));
		}
		return dispatch(matchFail('We couldn\'t find anybody to match you with, sorry!'));
};

}

export function matchSuccess(match) {
	return {
		type: 'MATCH_SUCCESS',
		payload: match
	}
};

export function matchFail(error) {
	return {
		type: 'MATCH_FAIL',
		error,
	}
};
