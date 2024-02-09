import { NavLink } from "react-router-dom";
// Paso importante para poder hacer uso de Navlink antes debemos importar nuestra propiedad como esta nexada dentro de nuestro nuevo archivo.

const NavBar = () => {
  // Para poder activar y desactivar una clase debemos asignar la clase que deseamos tener en este caso seria (textDecoration: "underline") lo guardemos dentro de una variable para poder hacer una validacion luegon con un operador ternario. dejare un ejemplo de esta forma tambien se puede activar o desactivar clases
  //   EJEMPLO-.1 const activeStyle = {
  //     textDecoration: "underline"
  //   };
  ////////////////////////////////////////////////////////////////////..
  // EJEMPLO-.2  ===> Usamos una sintaxis mas directa y mas sintetizada en donde ya no llamamos a la propiedad (textDecoration) si no colocamos directamente al valor que deseamos de la propiedad..
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
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
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">andresterraza.at@gmail.com</li>
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
            to="/my-acconut"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Acconunt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing In
          </NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

// Como dato importante en vite no funciona los exports nombrados como se lo haria en REACT.
export default NavBar;
