import React from 'react'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
