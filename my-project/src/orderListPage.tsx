import {FC,memo, useEffect} from "react"
import { connect, useDispatch } from 'react-redux';
import { loadOrderAction, orderLoadedAction } from "./actions/orders";
import  axios from 'axios';
import { useSelector } from 'react-redux';
import { OrderSelector, OrdersLoadingSelector } from './Selectors/order';
import order from './models/order';
import { Link } from 'react-router-dom';
import { State } from "./store";
import Order from "./models/order";

type ProductDetailPageProps={
  ordersLoading:boolean;
  Orders:Order[];
  loadOrder:any;
  orderLoaded:any;

};

const ProductDetailPage:FC<ProductDetailPageProps>=({Orders,ordersLoading,loadOrder,orderLoaded})=>{
  const dispetch=useDispatch();
    
  useEffect(()=>{
    loadOrder();

    axios.get("https://dummyjson.com/carts").then(response=>{
   orderLoaded(response.data.carts);

  } );

  },[]);

if(ordersLoading){
  return <div> Loading...</div>
}
return( 
  <div> {Orders.map((o)=>(
  <div key={o.id} >
   <Link
            className="text-indigo-700 cursor-pointer" to={"/orders/" + o.id}>Order number {o.id}
 </Link>, total:{o.total}, products:{o.totalProducts}
  </div>
))}
  </div>
)};
  ProductDetailPage.defaultProps={};
  function mapStateToProps(state:State){
    return{
    ordersLoading:OrdersLoadingSelector(state),
    Orders:OrderSelector(state)
   };}

   const mapDispatchToProps={
    loadOrder:loadOrderAction,
    orderLoaded:orderLoadedAction,

   }
export default connect(mapStateToProps,mapDispatchToProps) (memo(ProductDetailPage));