import React from 'react'
import BurgerIngredient from './Burger/BurgerIngredient';
import Burger from './Burger/Burger'

const BurgerBuilder = () => {
    return (
        <div>
            <Burger />
            <div>Build controls
                <BurgerIngredient />
            </div>
        </div>
    )
}

export default BurgerBuilder