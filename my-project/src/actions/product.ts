

import Product from "../models/products";
import {ActionCreator} from "./index"
export const LOAD_PRODUCTS="LOAD_PRODUCT";

export const loadProductsAction:ActionCreator=()=>({
    type: "LOAD_PRODUCT",
    payload: undefined,
});


export const PRODUCTS_LOADED="PRODUCT_LOADED";

export const prodectLoadedAction:ActionCreator<Product[]>=(products:Product[])=>({
    type: "PRODUCT_LOADED",
    payload: products,
}); 