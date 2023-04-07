import sadnessReducer from './Reducers.ts/sadnessReducer';
 import {combineReducers,createStore} from "redux"
import happynessReducer  from './Reducers.ts/happynessReducer';
import productReducer from './Reducers.ts/products';
import order from './models/order';
import orderReducer from './Reducers.ts/orders';

 export type Moment={
    intensity:number;
    when:Date;
 }
 
 
 
 const Reducer=combineReducers({
     happy:happynessReducer,   
     sad:sadnessReducer,
     products:productReducer,
     orders:orderReducer,
    });
    
    export type State=ReturnType<typeof Reducer>;

const store=  createStore(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;