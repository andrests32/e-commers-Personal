import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ShoppingCardContext } from "../Context";
import "./Style.css";

const ShowBuyCart = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        context.isOpenProductCartBuy ? "flex" : "hidden"
      } buy-cart-menu flex-col absolute right-0 border border-color5 rounded-lg bg-color10`}
    >
      <div className="flex justify-between items-center p-4 bg-color7 rounded-t-md">
        <h2 className="font-medium text-lg">Tus Compras</h2>
        <div>
          <IoClose
          className="hover:text-color11 cursor-pointer size-6" 
          onClick={() => context.closeProductCartBuy()} />
        </div>
      </div>
    </aside>
  );
};

export default ShowBuyCart;
