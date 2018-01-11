import {
    InputTypes,
    SELECT_TYPE,
    ADD_INPUT,
    REMOVE_INPUT,
    SET_INDEX
} from './constActionCreators';

// Select type reducer
const {INPUT_TYPE_TEXT} = InputTypes;

function selectInputType(state = INPUT_TYPE_TEXT, action) {

    switch(action.type) {

        case SELECT_TYPE:
            return {...state,
                inputType: action.dataType
            };

        default:
            return state;
    }
}

// Create new input
// New input initial states
const newInputInitialStates = {
    name: 'New input',
    desc: 'Some input to experiment with',
    idKey: '',
    title: 'This input will help you to reach everything you ever did and will wish',
    file: false,
    element: []
};

function createNewInput(state = newInputInitialStates, action) {

    switch(action.type) {
        case ADD_INPUT:
            return {...state,
                element: [
                    ...state.element
                ]
            };
    }
}