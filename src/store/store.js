import globalReducer from './reducer';
import {createStore} from 'redux';

let store = createStore(globalReducer);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log('asdf');

unsubscribe();

export default store;
