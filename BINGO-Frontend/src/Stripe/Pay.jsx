import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const KEY = 'pk_test_51KidFVSBHIuOmYU4aBCyxCuHqXcQZJqnmy5IOWWlGGN2cMo6rVKA2ytHyJLeKSqtTaWTNpdQPEhOKf1Pn2TUK6eO00afZBaXJf'

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

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        if(stripeToken) {
            return makeRequest();
        }
    }, [stripeToken])

    return (
        <Container>
            <StripeCheckout
                name='Bingo'
                image='https://avatars.githubusercontent.com/u/1486366?v=4'
                billingAddress
                shippingAddress
                description='Your total is 1799'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </Container>
    )
}

export default Pay