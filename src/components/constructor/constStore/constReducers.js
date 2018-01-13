import {INPUT_TYPES, TypesList} from "./constActions";

const initialState = {
    filter: TypesList.TEXT_TYPE,
    active: false
};

export function typeSelect(state = initialState, action) {
    switch (action.type) {
        case INPUT_TYPES:
            return {...state,
                filter: action.filter,
                active: true
            };
        default:
            return state;
    }
}