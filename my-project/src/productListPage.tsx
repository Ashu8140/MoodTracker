import axios from "axios";
import {FC,memo, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction, prodectLoadedAction } from "./actions/product";
import { productLoadingSelector, productSelector } from "./Selectors/products";

type ProductListPageProps={};

const ProductListPage:FC<ProductListPageProps>=(props)=>{
    const loading=useSelector(productLoadingSelector);
    const products=useSelector(productSelector); 
    const dispetch=useDispatch();

    useEffect(()=>{
      dispetch(loadProductsAction());
      axios.get("https://dummyjson.com/products").then((response) =>
      dispetch(prodectLoadedAction(response.data.products)));
    },[]);                                                                                                                                                                                                                                                                                                                                  
    
return (

  <div className="flex flex-wrap gap-2">
      
      {products.map((p)=>(
       
        <div className="p-2 max-w-xs rounded-md ">
       <div className=" w-full aspect-square">
       <img className="h-full w-full object-cover" src={p.thumbnail} />
         </div>
       <h2 className="text-gray-500">{p.category}</h2>
       <h2 className="text-xl">{p.title}</h2>
       <h2 className="text-red-500 text-xl">{p.rating}</h2>
       <h2>{p.price}</h2> 
        <h1> View Data</h1>
     </div>
           ))}
     </div>

);}

  ProductListPage.defaultProps={};

export default memo(ProductListPage);

