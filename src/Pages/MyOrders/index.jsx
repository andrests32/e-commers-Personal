import Layout from "../components/layout";

function MyOrders () {
    return(
        <Layout>
            My Orders
            <div className="px-2 overflow-y-scroll flex-1">
        {context.order?.slice(-1)[0]((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
        </Layout>
    )
}

export default MyOrders;
