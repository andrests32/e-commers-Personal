import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { ShoppingCardContext } from "../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../utils";
import "./Style.css";

const ShowBuyCart = () => {
  const context = useContext(ShoppingCardContext);

  const handleDelete = (id) => {
    const filertedProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filertedProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01.02.24",
      products: context.cartProducts,
      tatalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${
        context.isOpenProductCartBuy ? "flex" : "hidden"
      } buy-cart-menu flex-col fixed right-0 border border-color5 rounded-lg bg-color10`}
    >
      <div className="flex justify-between items-center p-4 bg-color7 rounded-t-md">
        <h2 className="font-medium text-lg font-display">Tus Compras</h2>
        <div>
          <IoClose
            className="hover:text-color11 cursor-pointer size-6"
            onClick={() => context.closeProductCartBuy()}
          />
        </div>
      </div>
      <div className="px-2 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-7">
        <p className="flex justify-between items-center mb-3 font-display">
          <span className="text-color6 text-md ">Total</span>
          <span className="text-color6 text-xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="font-display w-full bg-color7 py-3 rounded-lg mb-4 hover:text-color11"
            onClick={() => (handleCheckOut(), context.closeProductCartBuy())}
          >
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ShowBuyCart;
