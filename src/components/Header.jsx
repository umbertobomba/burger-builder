import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    height: 40px;
    background-color: #f2f3f2;
    margin-bottom: 16px;
`

const Header = () => {
    return (
        <StyledHeader>
            Header component
        </StyledHeader>
    )
}

export default Header