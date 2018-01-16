import {
    INPUT_TYPES,
    ADD_INPUT,
    REMOVE_INPUT,
    SET_TYPE
} from "./constActions";

// Change field type actionCreator
export function typesAction(inputType) {
    return {
        type: INPUT_TYPES,
        inputType
    }
}

export function setTypeAction(selectedType) {
    return {
        type: SET_TYPE,
        selectedType
    }
}

// Add new field actionCreator
export function inputAction(id, customType) {
    return {
        type: ADD_INPUT,
        id,
        customType
    }
}

// Remove created field actionCreator
export function removeAction(array, index) {
    return {
        type: REMOVE_INPUT,
        remove: () => {
            array.splice(index)
        }
    }
}

