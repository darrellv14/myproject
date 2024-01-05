export default function Product() {
  // const products = ["Laptop", "Phone", "Modem", "Nigger"];

  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 50 },
    { id: 3, name: "Nigger", price: 1200 },
    { id: 4, name: "Modem", price: 90 },
    { id: 5, name: "Laptop", price: 240 },
  ];

  const productList = products.map((product) => (
    <h3 key={product.id}>
      {product.name}: ${product.price}
    </h3>
  ));

  return <div>{productList}</div>;

  // return (
  //   <div>
  //     {products.map((product) => (
  //       <h3>{product}</h3>
  //     ))}
  //   </div>
  // );
}
