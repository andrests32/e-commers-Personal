//Para esta parte del componente usare una forma distinta de exportacion de modulos demotrando que se puede hacer de varias formas.
import { useContext } from "react";
import { ShoppingCardContext } from "../Context";
import { TiPlus} from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

const Card = (data) => {
  const context = useContext(ShoppingCardContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.closeProductCartBuy();
    context.setProductToShow(productDetail);
  };

  const addProductsBuyCart = (event, productDatas) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productDatas]);
    context.openProductCartBuy();
    context.closeProductDetail();
    // console.log("CART: ", context.cartProducts);
  };

  const renderIcon = (id) => {
    const isInCard =
      context.cartProducts.filter((product) => product.id === id).length > 0;
      

    if (isInCard) {
    
      return (
        <div className="absolute backdrop-blur-md bg-color6/70 top-0 right-0 justify-center items-cente w-7 h-7 rounded-lg m-2 p-1.5 text-color11"
        onClick={(e) => e.stopPropagation()}>
          <FaCheck></FaCheck>
        </div>
      );
    } else {
      return (
        <div
          className="absolute backdrop-blur-md bg-color3 top-0 right-0 justify-center items-cente w-7 h-7 rounded-lg m-2 p-1.5 hover:shadow-md hover:backdrop-shadow-md hover:bg-color7 hover:text-color11 text-color6"
          onClick={(event) => addProductsBuyCart(event, data.data)}
        >
          <TiPlus></TiPlus>
        </div>
      );
    }
  };

  return (
    <div
      className=" bg-color10 shadow-md hover:bg-color7 cursor-pointer w-56 h-80 rounded-lg font-display hover:py-0.5"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-color10 text-color6 rounded-lg text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <div className="flex justify-between">
        <div className="text-sm px-1.5 text-color6">{data.data.title}</div>
        <span className="text-lg font-medium px-1.5 text-color1">
          ${data.data.price}
        </span>
      </div>
    </div>
  );
};

export default Card;
