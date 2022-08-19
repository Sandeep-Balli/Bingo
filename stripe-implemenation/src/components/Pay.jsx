import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
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

const Pay = () => {
    return (
        <Container>
            <Button>Pay Now</Button>
        </Container>
    )
}

export default Pay