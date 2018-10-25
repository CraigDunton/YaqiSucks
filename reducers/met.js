
// doing state= {} will set the default state to nothing incase we arnt passed a state
export default function (state={}, action) {
	switch( action.type ){
		case 'MET_SUCCESS':
			return {
				...state,
				isFetched: true,
			};
		case 'MET_FAIL':
			return {
				...state,
				isFetched: true,
				metError: action.error,
			};
		default:
			return state;
	}
}
