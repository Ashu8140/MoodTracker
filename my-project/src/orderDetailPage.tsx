import {FC,memo} from "react"
import { useParams } from "react-router-dom";
import axios  from 'axios';
import { useEffect } from "react";
import Product from './models/products';
import Order from "./models/order";

export type OrderDetailPageProps={
  order:Order
  products:Product[];
  orderDetailLoaded:(order:Order)=>void;
  orderId:number;

};

const OrderDetailPage:FC<OrderDetailPageProps>=({
  order,
  products,
  orderDetailLoaded,
  
  
})=>{

    const params = useParams();
    const orderId=+params.orderId!;
    console.log(orderId);

     useEffect(()=>{
     
      axios.get("https://dummyjson.com/carts/"+orderId).then((response)=>{
        orderDetailLoaded(response.data)
      });
    },[ orderId]);
    
    if (!order) {
      return <div>Loading...</div>
    }
return (
<div>
    this is a order number:{order.id}, total prise:{order.total}
    <div>
     { products.map(p => <div key={p.id}>{p.title}</div>) }
    </div>
</div>
)
}
 
export default OrderDetailPage;