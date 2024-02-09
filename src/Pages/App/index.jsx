import { useRoutes } from "react-router-dom"
//Para poder enlazar las rutas debemos ejecutar el comando (npm install react-router-dom). esto nos ayuda a poder indicar a nuestro home que va a tener a nuestras otras pages. Como dato importante nuestro useRoutes es un hook. (En resumen lo que hace este hook es lanzarnos a las otras páginas que estarán dentro del homen como por ejemplo My Account y así a la que demos click pero esto lo hace sin abrír una nueva pestaña del navegador).
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrders";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import "./App.css";
//Tenemos formas de enlazar nuestras rutas, una podría ser dentro de nuestras función App con los elementos y las rutas por cada elemento colocaré un ejemplo de cada uno pero usaré mi forma en una función separa con su propia sintaxis 

function App() {
//Creamos una variable que guarda nuestra ruta el nombre de la variable es al azar pero lo importante es colocar nombres que sean similares para entender código, ahora dentro de la variable creamos un array qué tendrá objetos los cuales serán nuestras rutas. Entonces indicaremos la ruta y cual es el elemento. 
  let routes = useRoutes ([{
   path: "./", //Aquí indicamos la ruta que seria la caperta principal o raíz.
    element: <home /> //Aquí colocamos al elemento que estamos enlazando, que en este caso seria la ruta principal. 
  }]);
  return (
    <>
      <div className="bg-red-100">
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SingIn />
      </div>
    </>
  );
}

export default App;
