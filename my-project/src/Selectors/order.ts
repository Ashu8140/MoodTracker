import { State } from "../store";
import Product from './../models/products';
import { createSelector } from 'reselect';
import { normalize } from 'normalizr';
import { productsMapSelector } from './products';

export function OrdersSelector(state:State){
return state.orders;
}

export const OrdersLoadingSelector=createSelector(OrdersSelector,
    (orderState)=>orderState.loading);

    export const orderMapSelector= createSelector(OrdersSelector,
        (orderMap)=>orderMap.orders);




export const OrderSelector=createSelector(orderMapSelector,(normalizedOrders)=>
Object.keys(normalizedOrders).map((orderId)=>normalizedOrders[+orderId])

);
// export function OrderSelector(state:State){
// const normalizedOrders= state.orders.orders;
// const orderArr=Object.keys(normalizedOrders).map((orderId)=>normalizedOrders[+orderId]);
// console.log(orderArr);
// return orderArr; 
// }

export const ordersProductsSelector=createSelector(orderMapSelector, productsMapSelector,(OrderMap,productMap)=>
 Object.keys(OrderMap).reduce<{[orderId:number]:Product[]}>((previous,currentOrderId)=>{
    const order=OrderMap[+currentOrderId];
    const products=order.products.map((pid)=>productMap[pid]);
    return {...previous,[currentOrderId]:products}
},{})

);




// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log("console",Object.keys(object1));