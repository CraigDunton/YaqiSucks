
// doing state= {} will set the default state to nothing incase we arnt passed a state
export default function (state= {}, action) {
	switch( action.type ){
		case 'LOGIN_SUCCESS';
			return {
				userID: action.payload
			}
		case 'LOGIN_FAIL';
			return {
				LOGIN_ERROR: true
			}
	};
};