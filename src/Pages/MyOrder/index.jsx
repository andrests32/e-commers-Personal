import { useContext } from "react";
import { ShoppingCardContext } from "../components/Context";
import OrderCard from "../components/OrderCard";
import Layout from "../components/layout";
import { FiChevronsLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const latestOrderProducts = context.order?.slice(-1)[0]?.products || [];

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mt-5 mb-5 bg-color10 rounded-md py-1">
        <Link to="/my-orders" className="absolute left-3">
          <FiChevronsLeft className="text-3xl hover:text-color11"/>
        </Link>
        <h1 className="text-xl ">My Order</h1>
      </div>
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
