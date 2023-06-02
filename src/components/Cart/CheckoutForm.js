import classes from "./CheckoutForm.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const notSixChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const PostalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputsValidation, setFormInputsValidation] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = PostalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !notSixChars(enteredPostalCode);

    setFormInputsValidation({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidation.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidation.name && <p>Enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidation.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidation.street && <p>Enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidation.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={PostalCodeInputRef} type="text" id="postal" />
        {!formInputsValidation.postalCode && <p>Enter a valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidation.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidation.city && <p>Enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
