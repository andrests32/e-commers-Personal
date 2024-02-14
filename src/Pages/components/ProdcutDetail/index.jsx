import "./style.css";
import { IoClose } from "react-icons/io5";

export const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 font-display border border-color5 rounded-lg bg-color10">
      <div className="flex justify-between items-center p-4 bg-color7 rounded-md">
        <h2 className="font-medium text-md">Detalles del Producto</h2>
        <div>
        <IoClose className="size-6 hover:text-color11 cursor-pointer text-color1"/>
        </div>
      </div>
    </aside>
  );
};
