import React from 'react'
import styled from 'styled-components'

import BurgerIngredient from './BurgerIngredient'

const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
`

const Burger = () => {
    return (
        <StyledContainer>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </StyledContainer>
    )   
}

export default Burger