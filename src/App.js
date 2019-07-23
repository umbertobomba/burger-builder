import React from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import BurgerBuilder from './components/BurgerBuilder'

const StyledContainer = styled.div`
  text-align: center;
`

function App() {
  return (
    <StyledContainer>
      <Header />
      <BurgerBuilder />
    </StyledContainer>
  )
}

export default App;
