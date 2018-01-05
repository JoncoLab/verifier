import {combineReducers} from 'redux';
import {MAIN_EVENT, TEST} from "./actions";

let initialState = {
    menuMood: false
};

function showMeTheFuckingMenu(state = initialState, action) {
    switch (action.type) {

        case MAIN_EVENT:
            return {
                menuMood: action.menuMood
            };
        default:
            return state;
    }
}

let reducers = combineReducers({
    showMeTheFuckingMenu
});

export default reducers;
