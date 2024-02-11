//Para esta parte del componente usare una forma distinta de exportacion de modulos demotrando que se puede hacer de varias formas.
import { TiPlus } from "react-icons/ti";

export const Card = () => {
  //En una arrow function hacemos la exportacion directa colocando la propiedad export por delante de la funcion.

  return (
    <div className=" bg-color3 shadow-md cursor-pointer w-56 h-60 rounded-lg font-display">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-color7 text-color6 rounded-lg text-xs m-2 px-3 py-0.5">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="audifonos inalambricos JBL"
        />
        <div className="absolute backdrop-blur-md bg-color3 top-0 right-0 justify-center items-cente w-7 h-7 rounded-lg m-2 p-1.5 hover:shadow-md hover:backdrop-shadow-md hover:bg-color7 hover:text-color9 text-color8">
          <TiPlus />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm px-1.5 text-color6 sm">
          Laptop
        </span>
        <span className="text-lg font-medium px-1.5 text-color1">$1.300</span>
      </p>
    </div>
  );
};
