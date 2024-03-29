import { useContext } from "react";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { ShoppingCardContext } from "../Context";

export const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 font-display border border-color5 rounded-lg bg-color10`}
    >
      <div className="flex justify-between items-center p-4 bg-color7 rounded-t-md">
        <h2 className="font-medium text-md">Detalles del Producto</h2>
        <div>
          <IoClose
            className="size-6 hover:text-color11 cursor-pointer text-color1"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6 py-4 rounded-b-lg">
        <img className="w-full - h-full rounded-lg" src={context.productToShow.images}  alt={context.productToShow.title}/>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-lg mb-2">${context.productToShow.title}</span>
        <span className="font-light text-sm">${context.productToShow.description}</span>
      </p>
    </aside>
  );
};
