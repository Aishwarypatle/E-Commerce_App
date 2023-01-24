import styled from 'styled-components'
import React from 'react'
import {categoriesData}  from '../data'
import CategaryItem from './CategaryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
`

const Categaries = () => {
  return (
    <>
      <Container>
          {
            categoriesData.map((item) =>(
              <CategaryItem item={item} />
          ))}
      </Container>
    </>
  )
}

export default Categaries
