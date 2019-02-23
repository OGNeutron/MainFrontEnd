interface IState {
	offset: number
}

export const offsetReducer = (state: IState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { offset: state.offset + 10 }
		default:
			return state
	}
}
