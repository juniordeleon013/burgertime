import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map((ignKey) => {
            return [...Array(props.ingredients[ignKey])].map((_, i) => {
               return <BurgerIngredient key={ignKey + i} type={ignKey} />;
            });
    });
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
); 
};

export default Burger;