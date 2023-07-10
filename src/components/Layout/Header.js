import React from "react";
import classes from "./Header.module.css"
import meal from "../../assets/meal.jpg"
import CartButton from "../Layout/CartButton";

const Header = (props) =>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={meal}  alt="Meal"/>
            </div>
        </React.Fragment>
    )
}

export default Header;