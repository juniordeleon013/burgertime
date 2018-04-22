import React from 'react';
import classes from './BurgerControllers.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    { label: "Salad", type: "salad"},
    { label: "Bacon", type: "bacon"},
    { label: "Cheese", type: "cheese"},
    { label: "Meat", type: "meat"},
   
]
const BurgerControllers = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
        {controls.map( (crl) => (
            <BurgerControl 
            key={crl.label} 
            label={crl.label}
            remove={() => props.ingredientsRemove(crl.type)}
            add={() => props.ingredientsAdd(crl.type)}/>
        ))}
    </div>
);

export default BurgerControllers;
