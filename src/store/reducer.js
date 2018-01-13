import {RENDER_ACTION, RenderFilters} from "./actions";

// First reducer for App
const {RENDER_SIGN} = RenderFilters;

export function renderAppReducer(state = RENDER_SIGN, action) {

    switch (action.type) {
        case RENDER_ACTION:
            return action.filter;
        default:
            return state
    }
}
