import { useRoutes, BrowserRouter } from "react-router-dom";
//Para poder enlazar las rutas debemos ejecutar el comando (npm install react-router-dom). esto nos ayuda a poder indicar a nuestro home que va a tener a nuestras otras pages. Como dato importante nuestro useRoutes es un hook. (En resumen lo que hace este hook es lanzarnos a las otras páginas que estarán dentro del homen como por ejemplo My Account y así a la que demos click pero esto lo hace sin abrír una nueva pestaña del navegador).
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrders";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import "./App.css";
//Tenemos formas de enlazar nuestras rutas, una podría ser dentro de nuestras función App con los elementos y las rutas por cada elemento colocaré un ejemplo de cada uno pero usaré mi forma en una función separa con su propia sintaxis.
// PARA ESTE PROYECTO USAREMOS POR SEPARADO LA FUNCION CON SUS ELEMENTOS DE LA PAGINA PRINCIPAL..

// Para ser mas especificos con las rutas y poderlas retornar debemos hacer uso de una nueva propiedad llamada (BrowserRouter) esto nos sirve para poder llamar a nuestras funciones que estan fuera del componente principal que renderiza todo.

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> } //Para esta parte de la pagina de notfound debemos especificar con un aterisco para indicicar que es es cualquier otro ruta que no querramos que aparezca dentro del home principal. (Para resumir el not found lo manejamos para errores cuando no aparezca alguna pagina. )
  ]);
  return routes;
};

function App() {
  //Creamos una variable que guarda nuestra ruta el nombre de la variable es al azar pero lo importante es colocar nombres que sean similares para entender código, ahora dentro de la variable creamos un array qué tendrá objetos los cuales serán nuestras rutas. Entonces indicaremos la ruta y cual es el elemento.
  // let routes = useRoutes([
  //   {
  //     path: "/", //Aquí indicamos la ruta que seria la caperta principal o raíz.
  //     element: <home /> //Aquí colocamos al elemento que estamos enlazando, que en este caso seria la ruta principal.

  //     // Esta estructura es buena pero para no confundirno con los retunrs que hayan de cada componente que tengamos.
  //   }
  // ]);
  return (
    // Aqui debemos especificar muy bien la propiedad que llamamos para enrutar las paginas.
    <BrowserRouter>
      {/* Aqui llamamos a nuestra funcion que contiene las rutas de las otras pages conjuntamente con la pagina principal. */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
