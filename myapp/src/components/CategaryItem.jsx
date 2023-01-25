import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
  margin: 3px;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
`
const Title  = styled.h1``

const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
`
const Info = styled.div`
`
const Image = styled.img``



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
