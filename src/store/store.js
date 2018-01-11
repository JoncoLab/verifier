import globalReducer from './reducer';
import {createStore} from 'redux';

let store = createStore(globalReducer);

// Storage Test
//import {setRenderFilter, RenderFilters} from "./actions";

// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(setRenderFilter(RenderFilters.RENDER_CABINET));
//
// unsubscribe();

export default store;
