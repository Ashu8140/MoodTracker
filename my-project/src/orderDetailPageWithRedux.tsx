import { connect } from "react-redux";
import { orderDetailLoadedAction } from "./actions/orders";
import OrderDetailPage, { OrderDetailPageProps } from "./orderDetailPage";
import { orderMapSelector, ordersProductsSelector } from "./Selectors/order";
import { State } from "./store";


  function mapStateToProps(state:State,ownProps:Partial<OrderDetailPageProps>){
    const orderId: number = ownProps.orderId!;
    return {
      order: orderMapSelector(state)[orderId],
      products: ordersProductsSelector(state)[orderId],

    };   
  }
  const mapDispatchToProps={
    orderDetailLoaded:orderDetailLoadedAction,
  }

  
export default connect(mapStateToProps,mapDispatchToProps)(OrderDetailPage) ;         