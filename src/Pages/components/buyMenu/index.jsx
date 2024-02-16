import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ShoppingCardContext } from "../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../utils";
import "./Style.css";

const ShowBuyCart = () => {
  const context = useContext(ShoppingCardContext);

  const handleDelete = (id) => {
    const filertedProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filertedProducts)
  }

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
      <div className="px-2 overflow-y-scroll">
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
      <div className=" px-4 bg-color7 w-full h-10 font-display flex items-center">
          <p>
            <span className=" text-xl mr-10">Total</span>
            <span className="text-color11 ml-40">$ {totalPrice(context.cartProducts)}</span>
          </p>
      </div>
    </aside>
  );
};

export default ShowBuyCart;
