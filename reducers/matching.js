
// doing state= {} will set the default state to nothing incase we arnt passed a state
export default function (state={}, action) {
	switch( action.type ){
		case 'MATCH_SUCCESS':
			return {
				...state,
				isFetched: true,
				match: action.payload,
			};
		case 'MATCH_FAIL':
			return {
				...state,
				isFetched: true,
				matchError: action.error,
			};
		default:
			return state;
	}
}
