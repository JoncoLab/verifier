import {INPUT_TYPES, TypesList, ADD_INPUT} from "./constActions";

const initialState = {
    inputType: TypesList.TEXT_TYPE,
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

export function addInput(state = [], action) {
    switch(action.type) {
        case ADD_INPUT:
            return [
                ...state,
                action.el
            ];
        default:
            return state;
    }
}