import {createStore} from 'redux';
import renderAppReducer from './reducer';
import {combineReducers} from 'redux';
//import {setRenderFilter, RenderFilters} from "./actions";

let globalReducer = combineReducers({
    renderAppReducer
});

let store = createStore(globalReducer);

//Storage Test
// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(setSignFilter(SignFilters.SIGN_UP_RENDER));
//
// unsubscribe();

export default store;
