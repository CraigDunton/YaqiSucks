export function loginSuccess(userID) {
	return {
		type: 'LOGIN_SUCCESS',
		payload: userID
	}
};

export function loginFail() {
	return {
		type: 'LOGIN_FAIL'
	}
};