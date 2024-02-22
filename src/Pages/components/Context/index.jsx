import { createContext, useState } from "react";
import { useEffect } from "react";
import { API } from "../API/api";
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
  const closeProductCartBuy = () => setOpenProductCartBuy(false);

  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const [items, setItems] = useState(null); //Creamos una varieble que contiene un array que guarda dentro de nuestro (items, los productos de nuestra API), ahora nuestro (steItems, lo que hara es cambiar el estado de nuestra varible trayendo los datos y transformados en un JSON) que luego los consumiremos dentro de las etiquetas del HOME..

  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    // Usamos la propiedad de react para ingresar a la API y consumir los datos que tengamos dentro.
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`oh no, ocurrio un error: ${error}`);
      }
    }; //Usamos fetch para ingresar mediante la URL a la API..
    // .then((response) => response.json()) //Siempre se usa un then para capturar los datos y transformarlos en usn JSON.
    // .then((data) => setItems(data)); //Ahora que los capturamos los devolvemos a nuestro estado actualizaor que a su vez los enviara a nuestra variable items..
    fetchData();
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByCategory.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          'BY_TITLE_AND_CATEGORY',
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy('BY_TITLE', items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    // return () => {
    //   setSearchByTitle(null)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchByTitle, searchByCategory]);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
