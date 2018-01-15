import {INPUT_TYPES, ADD_INPUT} from "./constActions";

export function typesAction(inputType) {
    return {
        type: INPUT_TYPES,
        inputType
    }
}

export function inputAction(text) {
    return {
        type: ADD_INPUT,
        text
    }
}

