import globalReducer from './reducer';
import {createStore} from 'redux';
//import {setRenderFilter, RenderFilters, switchSign} from "./actions";

let store = createStore(globalReducer);

//Storage Test
// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(switchSign());
//
// unsubscribe();

export default store;
