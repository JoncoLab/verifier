// Select Type actionCreator
export const SELECT_TYPE = 'SELECT_TYPE';

export const InputTypes = {
    INPUT_TYPE_TEXT: 'INPUT_TYPE_TEXT',
    INPUT_TYPE_IMAGE: 'INPUT_TYPE_IMAGE',
    INPUT_TYPE_VIDEO: 'INPUT_TYPE_VIDEO'
};

export function selectType(dataType) {
    return {
        type: SELECT_TYPE,
        dataType
    }
}

// Add Input actionCreator
export const ADD_INPUT = 'ADD_INPUT';

export function addInput(name, desc, idKey, title, file) {
    return {
        type: ADD_INPUT,
        name,
        desc,
        idKey,
        title,
        file
    }
}

// Remove Input actionCreator
export const REMOVE_INPUT = 'REMOVE_INPUT';

export function removeInput() {
    return {
        type: REMOVE_INPUT,
        remove: false
    }
}

// Set Index actionCreator
export const SET_INDEX = 'SET_INDEX';

export function setIndex(index) {
    return {
        type: SET_INDEX,
        index
    }
}