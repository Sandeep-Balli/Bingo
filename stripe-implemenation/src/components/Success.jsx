import React from 'react'
import styled from 'styled-components'

const Successfull = styled.button`
    height: 42px;
    width: 89px;
    border-radius: 5px;
    color: white;
    background-color: black;
`
const Container = styled.div`
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
`

const Success = () => {
  return (
    <Container>
        <Successfull>Successfull</Successfull>
        <desc>Your order is being prepared. Thank you for choosing <b><span>BINGO</span></b></desc>
    </Container>
  )
}

export default Success