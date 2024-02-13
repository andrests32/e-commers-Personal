import { createContext } from "react";
import { PropTypes } from "prop-types";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  ShoppingCardContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  return <ShoppingCardContext.Provider>
    {children}
    </ShoppingCardContext.Provider>;
}
