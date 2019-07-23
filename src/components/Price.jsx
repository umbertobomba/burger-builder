import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    margin-top: 24px;
`
const StyledPrice = styled.span`
    font-size: 24px;
`

const Price = ({ price }) => {
    return (
        <StyledContainer>
            <StyledPrice>{price.toFixed(2)}$</StyledPrice>
        </StyledContainer>
    )
}

export default Price