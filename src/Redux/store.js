import {legacy_createStore as createStore} from 'redux';
import { reducer } from './reducer';
// import {getState} from 'redux';
export const store = createStore(reducer,{todos:[]});
store.subscribe(()=>{
    console.log(store.getState());
});