import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderDetailPage from "./orderDetailPageWithRedux";
import OrderListPage from "./orderListPage";
import ProductListPage from "./productListPage";
import HappyIncrementor from "./HappyIncrementor";
import SadIncrementor from "./SadIncrementor";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";

function App() {  
  return (
    <div>
      {/* <Routes>
        <Route index element={<ProductListPage /> }></Route>
     <Route path="/orders" element={<OrderListPage/>}></Route>
     <Route path="/orders/:orderId" element={<OrderDetailPage orderId={2}/>}></Route>
      </Routes> */}
  <HappyTracker/>
  <SadTracker/>
  <HappyIncrementor/>
  <SadIncrementor/>

    </div>
    
  )
}
export default App;

