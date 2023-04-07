import { State } from './../store';
import { createSelector } from 'reselect';


export function productStateSelector(state:State){
   return state.products;
}
export const productLoadingSelector=createSelector(productStateSelector,(productState)=>
productState.loading
);

//top lewel state
export const productsMapSelector = createSelector(
   productStateSelector,
   (productState) => productState.products
 );
 

export const productSelector=createSelector(productsMapSelector,(productState)=>
    Object.keys(productState).map((p)=>productState[+p])
)