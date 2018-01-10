import showProfile from './reducer';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
//import {openMain} from "./actions";

let globalReducer = combineReducers({
    showProfile
});

let store = createStore(globalReducer);

// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(openMain(true));
//
// unsubscribe();

export default store;
