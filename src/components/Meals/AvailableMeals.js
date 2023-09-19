import React, { useEffect, useState } from "react";
import classes from  "./AvailableMeals.module.css"
import MealItem from "../Meals/MealItem/MealItem";
import Card from "../UI/Card";
import axios from "axios";

const AvailableMeals = ()=>{
    const [meals, setMeals] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(
                "https://react-meals-3e5c0-default-rtdb.firebaseio.com/meals.json"
                );
                if (!response.data || response.status !== 200) {
                    throw new Error("Something went wrong!");
                }
                const responseData = response.data;
        
                const loadedMeals = Object.keys(responseData).map((key) => {
                const { name, description, price } = responseData[key];
                return {
                    id: key,
                    name,
                    description,
                    price,
                };
                });
        
                setMeals(loadedMeals);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching meals:", error);
                setIsLoading(false);
                setError(error.message);
            }
            };
        
            fetchMeals();
        }, []);
 
    return(
        <section className={classes.meals}>
            <Card>
                {isLoading ? (
                <section className={classes.mealsLoading}>
                    <p>Loading....</p>
                </section>
                ) : error ? (
                <section className={classes.mealsError}>
                    <p>{error}</p>
                </section>
                ) : meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                    <MealItem
                        id={meal.id}
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                    ))}
                </ul>
                ) : (
                <p>No meals available.</p>
                )}
            </Card>
        </section>
    )
}

export default AvailableMeals;