import {RENDER_ACTION, RenderFilters} from "./actions";
import {combineReducers} from 'redux';

// First reducer for App
const {RENDER_SIGN} = RenderFilters;

function renderAppReducer(state = RENDER_SIGN, action) {

    switch (action.type) {
        case RENDER_ACTION:
            return action.filter;
        default:
            return state
    }
}

export default renderAppReducer;
