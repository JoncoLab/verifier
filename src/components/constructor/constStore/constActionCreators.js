import {INPUT_TYPES} from "./constActions";

export function typesAction(filter, active) {
    return {
        type: INPUT_TYPES,
        filter,
        active
    }
}

