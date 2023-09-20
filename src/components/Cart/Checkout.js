import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const [formValidity,  setFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city:true,
    })

    const nameInput = useRef();
    const streetInput = useRef();
    const postalCodeInput = useRef();
    const cityInput = useRef();

    const isEmpty = (value) => {
        return value.trim() === "";
    }
    const isFiveChars = (value) =>{
        return value.trim().length === 5;
    }
    const formHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostalCode = postalCodeInput.current.value;
        const enteredCity = cityInput.current.value;

        const nameValid = !isEmpty(enteredName);
        const streetValid = !isEmpty(enteredStreet);
        const cityValid = !isEmpty(enteredCity);
        const postalCodeValid = isFiveChars(enteredPostalCode);

        setFormValidity({
            name: nameValid,
            street : streetValid ,
            city: cityValid,
            postalCode: postalCodeValid,
        })

        if(!formValidity){
            return;
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        });

        nameInput.current.value = "";
        streetInput.current.value = "";
        postalCodeInput.current.value = "";
        cityInput.current.value = "";

    };

    return (
        <form onSubmit={formHandler} className={classes.form}>
        <div className={`${classes.control} ${!formValidity.name ? classes.invalid : ""}`}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInput}/>
            {!formValidity.name && <p>Please enter name</p>}
        </div>
        <div className={`${classes.control} ${!formValidity.street ? classes.invalid : ""}`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInput}/>
            {!formValidity.street && <p>Please enter street</p>}
        </div>
        <div className={`${classes.control} ${!formValidity.postalCode ? classes.invalid : ""}`}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInput}/>
            {!formValidity.postalCode && <p>Please enter postal code (5 characters long)</p>}
        </div>
        <div className={`${classes.control} ${!formValidity.city ? classes.invalid : ""}`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInput}/>
            {!formValidity.city && <p>Please enter city</p>}
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