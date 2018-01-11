import {RENDER_ACTION, RenderFilters, SIGN_ACTION, switchSign} from "./actions";
import {combineReducers} from 'redux';

// First reducer for App
const {RENDER_SIGN} = RenderFilters;

function renderAppReducer(state = RENDER_SIGN, action) {
    if(typeof state === 'undefined') return state;

    switch (action.type) {
        case RENDER_ACTION:
            return action.filter;
        default:
            return state
    }
}

// Second reducer for Sign
const active = {
    active: true
};

function switchSignReducer(state = active, action) {
    if (typeof state === 'undefined') return state;

    switch (action.type) {

        case SIGN_ACTION:
            return !active;

        default:
            return state
    }
}

const globalReducer = combineReducers({
    renderAppReducer,
    switchSignReducer
});

export default globalReducer;
