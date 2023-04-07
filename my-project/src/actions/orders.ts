import { ActionCreator } from ".";
import Order from './../models/order';

export const LOAD_ORDER="LOAD_ORDER";

export const loadOrderAction: ActionCreator=()=>({
    type: "LOAD_ORDER",
});

export const ORDER_LOADED="ORDER_LOADED";

export const orderLoadedAction: ActionCreator<Order[]>=(orders:Order[])=>({
    type: "ORDER_LOADED",
    payload:orders, 
});
export const ORDER_DETAIL_LOADED="ORDER_DETAIL_LOADED";

export const orderDetailLoadedAction:ActionCreator<Order>=(order:Order)=>({
    type: "ORDER_DETAIL_LOADED",
    payload: order,
});
