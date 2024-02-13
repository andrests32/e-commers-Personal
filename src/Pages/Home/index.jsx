import { useState, useEffect } from "react"; //Primero importamos los estados que usaremos de React
import Layout from "../components/layout";
import Card from "../components/Card/card";
import { Inputs } from "../components/Input/input";
import { Titles } from "../components/TitleHome/title";
import { API } from "../components/API/api";

function Home() {
  const [items, setItems] = useState(null); //Creamos una varieble que contiene un array que guarda dentro de nuestro (items, los productos de nuestra API), ahora nuestro (steItems, lo que hara es cambiar el estado de nuestra varible trayendo los datos y transformados en un JSON) que luego los consumiremos dentro de las etiquetas del HOME..
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

  return (
    <Layout>
      <Titles />
      <Inputs />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </Layout>
  );
}

export default Home;
