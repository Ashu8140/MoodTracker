import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderDetailPage from "./orderDetailPageWithRedux";
import OrderListPage from "./orderListPage";
import ProductListPage from "./productListPage";

function App() {  
  return (
    <div>
      <Routes>
        <Route index element={<ProductListPage /> }></Route>
     <Route path="/orders" element={<OrderListPage/>}></Route>
     <Route path="/orders/:orderId" element={<OrderDetailPage orderId={2}/>}></Route>
      </Routes>

    </div>
    
  )
}
export default App;

