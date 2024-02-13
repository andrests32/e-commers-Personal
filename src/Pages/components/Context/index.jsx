import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  console.log('COUNT:', count);

  ShoppingCardContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  return <ShoppingCardContext.Provider value={{
    count,
    setCount
  }}>
    {children}
    </ShoppingCardContext.Provider>;
}
