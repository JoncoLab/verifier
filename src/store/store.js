import {createStore} from 'redux';
import reducers from './reducer';

let store = createStore(reducers);


// Redux Test

//import {openMain} from "./actions";

// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(openMain(true));
//
// unsubscribe();
