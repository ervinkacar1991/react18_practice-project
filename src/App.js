import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...exist, quantity: exist.qty + 1 } : item
      );
      setCartItems(newCartItems);
    } else {
      if (!exist) {
        const newCartItems = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(newCartItems);
      }
    }
  };

  const onRemove = (product) => {};
  const { products } = data;
  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main onAdd={onAdd} onRemove={onRemove} products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
