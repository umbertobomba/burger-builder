import React from 'react'
import styled from 'styled-components'

import BurgerIngredient from './BurgerIngredient'

const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
`

const Burger = ({ config }) => {
    return (
        <StyledContainer>
            {config.map((ingredient, i) => (
                <BurgerIngredient type={ingredient} key={i}/>
            ))}
        </StyledContainer>
    )   
}

export default Burger