import React, { useState } from 'react'

import Price from './Price'
import BuildControls from './BuildControls'
import Burger from './Burger/Burger'

const BurgerBuilder = () => {
    const [ingrid, setIngrid] = useState(["bread-bottom"])
    const [price, setPrice] = useState(7.99)
    
    const submitHandler = e => {
        e.preventDefault()
        let newArr = ingrid.slice()
        newArr.unshift("bread-top")

        setIngrid(newArr)
    }

    const clickHandler = e => {
        let newArr = ingrid.slice()
        newArr.unshift(e.target.value)

        setIngrid(newArr)
        setPrice(price + 2)
    }

    return (
        <div>
            <Burger 
                config={ingrid}
            />
            <BuildControls 
                click={clickHandler} 
                submit={submitHandler} 
            />
            <Price price={price}/>
        </div>
    )
}

export default BurgerBuilder