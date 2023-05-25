import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./ElectronicItem.module.css";
import ElectronicItemForm from "./ElectronicItemForm";

const ElectronicItem = (props) => {
  const cartCont = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCont.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <ElectronicItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ElectronicItem;
