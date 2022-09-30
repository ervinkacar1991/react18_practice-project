import React from "react";

const Header = () => {
  return (
    <div className=" row center block">
      <div>
        <a href="#/">Simple Shopping Cart</a>
      </div>
      <div>
        <a href="#/cart">Cart</a> <a href="#/signin">Sign In</a>
      </div>
    </div>
  );
};

export default Header;
