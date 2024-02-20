import Layout from "../components/layout";
import OrdersCard from "../components/OrdersCard";
import { useContext } from "react";
import { ShoppingCardContext } from "../components/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCardContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mt-4 mb-5 text-xl bg-color10 py-1 rounded-md">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
          ;
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
