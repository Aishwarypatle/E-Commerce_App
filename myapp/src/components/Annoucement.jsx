import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    height: 30px;
    width: 100%;
    `
const Annoucement = () => {
  return (
    <Container>
       Hurrray ! $50 off on any item above $500  
    </Container>
  )
  }
export default Annoucement
