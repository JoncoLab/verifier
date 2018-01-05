import {MAIN_EVENT, openMain} from "./actions";

const initialState = {
    mainMood: openMain.mood
};

function mainApp(state = initialState, action) {

    switch (action.type) {

        case MAIN_EVENT:
            return Object.assign({}, state, {
                mood: true
            });

        default:
            return state;
    }
}