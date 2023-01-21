import React from 'react'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import Pic from "../images/business.jpg"
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
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction ==="left" && "10px"};
    right: ${(props)=> props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;    
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
// const Image = styled.div`
//     height: 80%;
// `
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title  = styled.h1`
    
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                       <img style={{height:'80%'}} src={Pic} alt='im'></img>
                    </ImageContainer>
                    <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
