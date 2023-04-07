import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from 'redux';
import { Action } from "../actions";
import { LOAD_ORDER, ORDER_LOADED, ORDER_DETAIL_LOADED } from './../actions/orders';
import Order from './../models/order';

type NormalizedOrder={[id:number]:Order};

export type State={
    loading:boolean,
    orders:NormalizedOrder;
    oders_products:{[orderId:number]:number[]}
};
export const initialState:State={
    loading:false,
    orders:{},
    oders_products: {},
};

function orderReducer(state=initialState,action:Action):State{

    switch(action.type){
        case LOAD_ORDER:
        return produce(state,(draft)=>{
         draft.loading=true;
        });

        case ORDER_LOADED:
        return produce(state,(draft)=>{
         draft.loading=false;

         const orderArr=action.payload;

         const ProductEntity=new schema.Entity("products");
         const orderEntity=new schema.Entity("orders",{
         products:[ProductEntity],
        });
        const data=normalize(orderArr,[orderEntity]);
        draft.orders=data.entities.orders!;
        
        });
        case ORDER_DETAIL_LOADED:
        return produce(state,(draft)=>{
        const order=action.payload;
        
        const ProductEntity=new schema.Entity("products");
        const orderEntity=new schema.Entity("orders",{
        products:[ProductEntity],
       });
       const data=normalize(order,orderEntity);
       draft.orders[order.id]=data.entities.orders![order.id];

       
        });


        default:
            return state;
    }
}
export default  orderReducer;

