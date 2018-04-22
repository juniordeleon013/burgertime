import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControllers from '../../components/Burger/BurgerControllers/BurgerControllers'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.3,
    bacon: 0.7
}
export default class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
               salad: 0,
               bacon: 0,
               cheese: 0,
               meat: 0 
            },
            totalPrice: 0,
            max: 0
        };
    }

    AddIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredientsInmutable = {
            ...this.state.ingredients
        };
        let max = this.state.max;
        
        if(max < 6){
            updateIngredientsInmutable[type] = updateCount;
            const priceAdd = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAdd;
            max += 1;
            console.log(max);
            this.setState({
                ingredients: updateIngredientsInmutable,
                totalPrice: newPrice,
                max: max
            });
            
        }
        


    }

    RemoveIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngredientsInmutable = {
            ...this.state.ingredients
        };
        let max = this.state.max;
        if(updateIngredientsInmutable[type] > 0){
            updateIngredientsInmutable[type] = updateCount;
            const priceDeduction = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            max -= 1
            this.setState({
                ingredients: updateIngredientsInmutable,
                totalPrice: newPrice,
                max: max
            });
        }
        


    }
    
    render(){
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControllers totalPrice={this.state.totalPrice} ingredientsRemove={this.RemoveIngredientHandler} ingredientsAdd={this.AddIngredientHandler}/>
            </div>
        );
    }
}

