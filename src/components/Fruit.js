export default function Fruit() {

  const fruits = ["Mango", "Durian", "Rambutan", "Banana"];

  const fruitList = fruits.map((fruit, index) => (
    <h3 key={index}>{fruit}</h3>
  ));

  return <div>{fruitList}</div>;
}