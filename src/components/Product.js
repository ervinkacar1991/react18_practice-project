import React from "react";

const Product = (props) => {
  const { product, onAdd, onRemove } = props;
  return (
    <div className="cart">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price} $</div>
      <button
        onClick={() => {
          onAdd(product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
