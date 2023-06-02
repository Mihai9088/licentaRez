import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cartCont = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

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

  const OrderButtonHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://licenta-198cd-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCont.items,
        }),
      }
    );
    setIsSubmitting(false);
    setSubmitted(true);
    cartCont.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={OrderButtonHandler}>
          Order
        </button>
      )}
    </div>
  );

  const isSubmittingModalContent = <p>Sending order...</p>;
  const didSubmitModalContent = <p>The order was sent succesfully!</p>;

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span className={classes.s1}>{totalAmount}</span>
      </div>
      {checkout && (
        <CheckoutForm onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!checkout && modalActions}
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !submitted && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {submitted && submitted && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
