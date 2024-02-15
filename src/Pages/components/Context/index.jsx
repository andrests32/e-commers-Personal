import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOPen] = useState(false);
  const openProductDetail = () => setIsProductDetailOPen(true);
  const closeProductDetail = () => setIsProductDetailOPen(false);
  const [productToShow, setProductToShow] = useState({});
  
  const [isOpenProductCartBuy, setOpenProductCartBuy] = useState(false);
  const openProductCartBuy = () => setOpenProductCartBuy(true);
  const closeProductCartBuy = () => setOpenProductCartBuy(false)
  
  const [cartProducts, setCartProducts] = useState([])

  ShoppingCardContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isOpenProductCartBuy,
        openProductCartBuy,
        closeProductCartBuy,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
