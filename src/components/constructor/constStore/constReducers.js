import {INPUT_TYPES, TypesList, ADD_INPUT, REMOVE_INPUT, SET_TYPE} from "./constActions";

const initialState = {
    inputType: TypesList.TEXT_TYPE,
    list: []
};

export function typeSelect(state = initialState, action) {
    switch (action.type) {
        case INPUT_TYPES:
            return {...state,
                inputType: action.inputType
            };
        default:
            return state;
    }
}