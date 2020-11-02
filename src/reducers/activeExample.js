const initialState = {
	activeExample: "",
};

const actions = {
	CHANGE_ACTIVE_EXAMPLE: changeEctiveExample,
};

function changeEctiveExample(state, action) {
	return {
		activeExample: action.playload,
	};
}

export default {
	initialState,
	actions,
};
