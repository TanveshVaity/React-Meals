import React from "react";
import classes from  "./AvailableMeals.module.css"
import dummyMeals from "./dummyMeals";
import MealItem from "../Meals/MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = ()=>{
    const mealsList = dummyMeals.map((meal) => {
        return(
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description = {meal.description}
                price= {meal.price}
            />
        )
    });

    return(
        <section className={classes.meals}>
            <Card >
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;