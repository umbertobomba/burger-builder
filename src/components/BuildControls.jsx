import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 75px;
`

const StyledSubmit = styled.input`
    margin-top: 24px;
`

const BuildControl = ( props ) => {
    return (
        <div>
            <h2>Add your ingredients</h2>
            <form onSubmit={props.submit}>
                <StyledInput 
                    type="button" 
                    value="meat"
                    onClick={props.click}
                />
                <br />
                <StyledInput 
                    type="button" 
                    value="cheese"
                    onClick={props.click}
                />
                <br />
                <StyledInput 
                    type="button" 
                    value="salad"
                    onClick={props.click}
                />
                <br />
                <StyledInput 
                    type="button" 
                    value="bacon"
                    onClick={props.click}
                />
                <br />
                <StyledSubmit type="submit" />
            </form>
        </div>
    )
}

export default BuildControl