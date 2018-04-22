import React from 'react';
import classes from './BurgerControl.css';
const BurgerControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.add} className={classes.More}>More</button>
        <button onClick={props.remove} className={classes.Less}>Less</button>
    </div>
);

export default BurgerControl;