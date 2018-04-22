import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((ignKey) => {
            return [...Array(props.ingredients[ignKey])].map((_, i) => {
               return <BurgerIngredient key={ignKey + i} type={ignKey} />;
            });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Add ingredients to your Burger</p>
    }
    
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
); 
};

export default Burger;