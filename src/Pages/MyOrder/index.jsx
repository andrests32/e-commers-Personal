import { useContext } from "react";
import { ShoppingCardContext } from "../components/Context";
import OrderCard from "../components/OrderCard";
import Layout from "../components/layout";

function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const latestOrderProducts = context.order?.slice(-1)[0]?.products || [];

  return (
    <Layout>
      My Order
      <div className="px-2 overflow-y-scroll flex-1">
        {latestOrderProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;