import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCont = useContext(CartContext);

  const totalAmount = `Ron${cartCont.totalAmount.toFixed(2)}`;
  const hasItems = cartCont?.items?.length > 0;
  const cartItemRemover = (id) => {
    cartCont.removeItem(id);
  };
  const cartItemAdd = (item) => {
    cartCont.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCont?.items?.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemover.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span className={classes.s1}>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
