import React from "react";

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div className=" row center block">
      <div>
        <a href="#/">Simple Shopping Cart</a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Sign In</a>
      </div>
    </div>
  );
};

export default Header;
