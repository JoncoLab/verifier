import {
    INPUT_TYPES,
    ADD_INPUT,
    REMOVE_INPUT
} from "./constActions";

// Change field type actionCreator
export function typesAction(inputType) {
    return {
        type: INPUT_TYPES,
        inputType
    }
}

// Add new field actionCreator
let nextIdKey = 0;
export function inputAction(el) {
    return {
        type: ADD_INPUT,
        el,
        keyId: nextIdKey++
    }
}

// Remove created field actionCreator
export function removeAction(remove) {
    return {
        type: REMOVE_INPUT,
        remove
    }
}

