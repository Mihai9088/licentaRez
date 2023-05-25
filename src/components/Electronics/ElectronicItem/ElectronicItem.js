import React from "react";
import classes from "./ElectronicItem.module.css";
import ElectronicItemForm from "./ElectronicItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const ElectronicItem = (props) => {
  const cartCont = useContext(CartContext);

  const price = `Ron${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCont.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ElectronicItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ElectronicItem;
