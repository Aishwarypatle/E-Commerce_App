import React from 'react'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import {sliderData} from "../data"
import { useState } from 'react'


const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    
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
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.transformIndex * -100}vw);
    display: flex;
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;    
    background-color: #${(props) => props.bg};
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
    font-size: 70px;
`

const  Desc  = styled.p`
    margin: 50px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 4px;
`

const Button  = styled.button`
    padding: 12px;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;

`


const Slider = () => {

    const [transformIndex , setTransformIndex] = useState(0)

    const handleClick = (direction) =>
    {
        if(direction==='left')
        {
            setTransformIndex(transformIndex > 0 ? transformIndex - 1 : 2)
        }
        else
        {
            setTransformIndex(transformIndex < 2 ? transformIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left"  onClick={()=> handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        {
            sliderData.map((data)=>(
            <Wrapper transformIndex={transformIndex}>
                <Slide bg={data.bg} key={data.id}>
                    <ImageContainer>
                       <img  src={data.image} alt='im'></img>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{data.title}</Title>
                        <Desc>{data.description}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
        ))}
        <Arrow direction="right" onClick={()=> handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
