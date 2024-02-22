import Layout from "../components/layout";
import Card from "../components/Card/card";
import { Inputs } from "../components/Input/input";
import { Titles } from "../components/TitleHome/title";
import { ProductDetail } from "../components/ProdcutDetail/index";
import { useContext } from "react";
import { ShoppingCardContext } from "../components/Context";

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>UPSS!! No hemos encontrado lo que buscas..</div>;
    }
  };

  return (
    <Layout>
      <Titles />
      <Inputs />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
