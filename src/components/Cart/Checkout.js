import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const nameInput = useRef();
    const streetInput = useRef();
    const postalCodeInput = useRef();
    const cityInput = useRef();

    const formHandler = (event) => {
        const enteredName = nameInput.current.value;
        const enterStreet = streetInput.current.value;
        const enteredPostalCode = postalCodeInput.current.value;
        const enteredCity = cityInput.current.value;

        event.preventDefault();
    };

    return (
        <form onSubmit={formHandler} className={classes.form}>
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInput}/>
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