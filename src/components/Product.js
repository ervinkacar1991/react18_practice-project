import React from "react";

const Product = (props) => {
  const { item, product, onAdd, onRemove } = props;
  return (
    <div className="cart">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price} $</div>

      <div>
        {item ? (
          <div>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
            <span>{item.qty}</span>
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
          </div>
        ) : (
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        )}
      </div>

      {/* {item ? (
        <div>
          <button onClick={() => onRemove(item)} clasName="remove">
            -
          </button>
          <span className="p-1">{item.qty}</span>
          <button className="add" onClick={() => onAdd(item)}>
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            onAdd(product);
          }}
        >
          Add To Cart
        </button>
      )} */}
    </div>
  );
};

export default Product;
