import React, { useState } from "react";

const ProductCard = ({ name, price }) => {
  const [inCart, setInCart] = useState(false);

  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Цена: {price} KZT</p>
      <button
        onClick={() => setInCart(!inCart)}
        style={inCart ? styles.removeButton : styles.addButton}
      >
        {inCart ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
  },
  addButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const App = () => {
  const products = [
    { name: "Ноутбук", price: 1 },
    { name: "Смартфон", price: 2 },
    { name: "Наушники", price: 1503300 },
  ];

  return (
    <div style={styles.container}>
      <h2>Товары</h2>
      <div style={styles.products}>
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};


export default App;
