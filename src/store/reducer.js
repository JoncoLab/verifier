import {RENDER_ACTION, RenderFilters} from "./actions";
import {combineReducers} from 'redux';

const {SHOW_SIGN} = RenderFilters;

function renderAppReducer(state = SHOW_SIGN, action) {
    if(typeof state === 'undefined') return state;

    switch (action.type) {
        case RENDER_ACTION:
            return action.filter;
        default:
            return state
    }
}

const globalReducer = combineReducers({
    renderAppReducer
});

export default globalReducer;
