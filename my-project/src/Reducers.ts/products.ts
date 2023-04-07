import { LOAD_PRODUCTS, PRODUCTS_LOADED } from './../actions/product';
import produce from "immer";
import { AnyAction } from 'redux';
import { ORDER_LOADED, ORDER_DETAIL_LOADED } from './../actions/orders';
import Order from './../models/order';
import { schema } from 'normalizr';
import { normalize } from 'normalizr';
import Product from './../models/products';

type NormalizedOrder={[id:number]:Product };

 type State={
    products:NormalizedOrder; 
    loading:boolean,
};

const initialState:State={
    products:[],
    loading:false,
};


function productReducer(state=initialState,action:AnyAction):State{
    switch(action.type){
        case LOAD_PRODUCTS:
        return produce(state,(draft)=>{
         draft.loading=true;
        });

        case PRODUCTS_LOADED:
        return produce(state,(draft)=>{
         const products=action.payload;
         const normalizedOrders=products.reduce(function(previous:NormalizedOrder,current:Order) {
            return {...previous, [current.id]:current};
            },{});
            draft.products=normalizedOrders; 
        });
        case ORDER_LOADED:
        return produce(state,(draft)=>{
            const Order=action.payload;
             const products=Order.reduce(function(previous:Product[],current:any) {
                 return [...previous,...current.products] ;  
                },[]);

             const normalizedOrders=products.reduce(function(previous:NormalizedOrder,current:Order) {
                return {...previous, [current.id]:current};
                },{});
                draft.products=normalizedOrders;  
        });
        case ORDER_DETAIL_LOADED:
        return produce(state,(draft)=>{
          const order=action.payload;
          const productEntity=new schema.Entity("products");
        const data = normalize(order.products,[productEntity]);
          draft.products={...draft.products, ...data.entities.products}
        });
        default:
            return state;   
    } 
}
export default productReducer;

