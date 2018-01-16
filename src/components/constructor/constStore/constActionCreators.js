import {
    INPUT_TYPES
} from "./constActions";

// Change field type actionCreator
export function typesAction(inputType) {
    return {
        type: INPUT_TYPES,
        inputType
    }
}

