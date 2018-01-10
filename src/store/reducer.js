import {MAIN_EVENT} from "./actions";

let initialState = {
    profileState: false
};

function showProfile(state = initialState, action) {
    switch (action.type) {

        case MAIN_EVENT:
            return {
                profileState: true
            };

        default:
            return state;
    }
}

export default showProfile;
