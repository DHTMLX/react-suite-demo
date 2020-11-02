import { createStore, combineReducers } from "redux";
import activeExampleConfig from "./reducers/activeExample";

const createReducer = (initialState, handlers) => {
	return (state = initialState, action) => {
		return (handlers[action.type] && handlers[action.type](state, action)) || state;
	};
};

const activeExapmleReducer = createReducer(activeExampleConfig.initialState, activeExampleConfig.actions);

const rootReducer = combineReducers({
	activeExample: activeExapmleReducer,
});

export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
