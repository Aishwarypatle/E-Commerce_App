import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Title  = styled.h1`
 color:white;
    margin-bottom: 20px;`

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const Image = styled.img`
   width: 100%;
  height: 100%;
  object-fit: cover;
  
  `



const CategaryItem = ({item}) => {
  return (
   <>
      <Container>

      <Image src={item.image} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>  
        </Info>
      </Container>
   </>
  )
}

export default CategaryItem
