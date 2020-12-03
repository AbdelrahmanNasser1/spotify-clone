export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	items: null,
	token:
		'BQAdoz2-xxOHKTgpbdI7WHNbL-gfl21sBg6WIrvi2VFB38arQ0vUQCqdH6XjaTy4ggUqKTRnZRoeih7y5tdFAaoTAhr3nrkj-pJuT-gRWx0JQq6H7B4rAT1KvWb4om7hWml0wrxf7EtdvuT9hqbnN6afZV-550G6Zx4qorb5wfjaHofR',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		default:
			return state;
	}
};

export default reducer;
