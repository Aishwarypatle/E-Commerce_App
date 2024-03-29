import React from 'react'
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from '@mui/icons-material';
import {Badge} from '@mui/material'

const Container = styled.div`
        height:100px;
        margin-top: 5px;
        
`

const Language = styled.span`
    font-size:15px;
    cursor:pointer;
    `

const SearchContainer = styled.div`
    border: 2px solid lightgrey;
    display:flex;
    align-items:center;
    margin-left:15px;
    padding:5px;
    max-width: 60%;
`

const Input = styled.input`
    border: none;
    max-width: 80%;
`

const Logo = styled.h1`
    font-weight: bold;
    `

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
`
const Left = styled.div`
    flex:1;
    display:flex;
    `
const Center = styled.div`
    flex:1;
    text-align: center;
    `
const Right = styled.div`
    flex:1;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 5px;
`
const MenuItem =styled.div`
    font-size:14px ;
    cursor:pointer;
    margin-left: 25px;
    `


const Navbar = () => {
  return (
    
        <Container>
           <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:'grey', fontSize:'16px'}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>AISH</Logo></Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN-IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    



    
  )
}

export default Navbar
