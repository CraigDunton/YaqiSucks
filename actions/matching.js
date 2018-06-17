import matchUser from '../helpers/matchUser';

export function beginMatching(uid, orgCode) {
return async (dispatch, getState) => {
	let response;

	try {
		response = await matchUser(uid, orgCode);
	} catch (err) {
		return dispatch(matchFail('Something went wrong...Try again?'))
	}

	if(response.error){
		//not sure what an error looks like... might just be returned as response
		return dispatch(matchFail(response.error));
	} else {
		return dispatch(matchSuccess(response));
	}
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
