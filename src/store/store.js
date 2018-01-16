import {combineReducers, createStore} from 'redux';
import {renderAppReducer} from "./reducer";
import {typeSelect} from "../components/constructor/constStore/constReducers";

const globalReducer = combineReducers({
    renderAppReducer,
    typeSelect
});
const store = createStore(globalReducer);

export default store;

// U can get access to the actionCreators in this way

// const mapDispatchToProps = (dispatch) => {
//     return {
//         someActionCreator: someActionCreator
//     }
// };

// With 'bindActionCreators' we can get our actionCreator as a prop
// and if we wrap action into 'dispatch' we can even enter store via the component

// const mapDispatchToProps = (dispatch) => {
//     /* code change */
//     return bindActionCreators({
//         someActionCreator: somActionCreator
//     }, dispatch);
// };
