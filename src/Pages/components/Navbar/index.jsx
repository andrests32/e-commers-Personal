import { NavLink } from "react-router-dom";
// Paso importante para poder hacer uso de Navlink antes debemos importar nuestra propiedad como esta nexada dentro de nuestro nuevo archivo.

// import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { ShoppingCardContext } from "../Context";
// import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  // Para poder activar y desactivar una clase debemos asignar la clase que deseamos tener en este caso seria (textDecoration: "underline") lo guardemos dentro de una variable para poder hacer una validacion luegon con un operador ternario. dejare un ejemplo de esta forma tambien se puede activar o desactivar clases
  //   EJEMPLO-.1 const activeStyle = {
  //     textDecoration: "underline"
  //   };
  ////////////////////////////////////////////////////////////////////..
  // EJEMPLO-.2  ===> Usamos una sintaxis mas directa y mas sintetizada en donde ya no llamamos a la propiedad (textDecoration) si no colocamos directamente al valor que deseamos de la propiedad..
  const context = useContext(ShoppingCardContext);
  const activeStyle = "underline decoration-2 underline-offset-4 text-color11 ";

  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handlesSingOut = () => {
    const stringifiedSingOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSingOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-color5 underline">{parsedAccount?.email}</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sing-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handlesSingOut()}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handlesSingOut()}
          >
            Sign In
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light font-display bg-color7">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg hover:text-color11">
          <NavLink
            to={`${isUserSignOut ? "/sing-in" : "/"}`}
            //Esta sintaxis va con el ejemplo 1
            // EJEMPLO-.1 style={({ isActive }) => (isActive ? activeStyle : undefined)}
            /////////////////////////////////////////////////////////////......
            //Tenemos una sintaxis un poco diferente ya que aqui no llamamos a la propiedad (style) para hacer la logica de activacion o desactivacion de la clase..
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ShopLine
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3 px-2">
        {renderView()}
        <li className="flex items-center">
          <FaShoppingBag
            className="size-5 text-color9 cursor-pointer"
            onClick={() => (
              context.openProductCartBuy(), context.closeProductDetail()
            )}
          />

          <div className="text-color11 size-7">
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  );
};

// Como dato importante en vite no funciona los exports nombrados como se lo haria en REACT.
export default NavBar;
