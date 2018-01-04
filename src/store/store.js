import {combineReducers} from "redux";
import ProfileReducer from "./reducer";
import activeProfile from "./activeProfile";

const allReducers = combineReducers({
    profile: ProfileReducer,
    activeProfile: activeProfile
});

export default allReducers;