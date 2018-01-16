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

export function setCustomFieldType(state = initialState.inputType, action) {
    if(action.type === SET_TYPE) {
        return Object.assign({}, state, {
            selectedType: action.selectedType
        });
    } else {
        return state;
    }
}

export function addInput(state = {list: []}, action) {
    switch(action.type) {

        case ADD_INPUT:
            return ;

        case REMOVE_INPUT:
            return asdf;

        default:
            return state;
    }
}