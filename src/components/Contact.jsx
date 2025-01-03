import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from "styled-components"
import Map from "./Map"

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`

const Right = styled.div`
    flex: 1.4;

    @media only screen and (max-width: 768px) {
        display: none;
    }

`

const Title = styled.h1`
    font-weight: 250;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media only screen and (max-width: 768px) {
        width: 300px;
    }
`

const Input = styled.input`
    padding: 20px;
    background-color: #cfdbf7;
    border: none;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    padding: 20px;
    background-color: #cfdbf7;
    border: none;
    border-radius: 5px;
`

const Button = styled.button`
    background-color: #D17CDE;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
`


const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null) 
    
    const handleSubmit = (e) =>{
        e.preventDefault()
    
        emailjs.sendForm('service_c4cy8ya', 'template_8i322xn', ref.current, { publicKey: 'lUJerUrqEX5DXT1Ao', })
        .then((result) => {
        console.log(result.text);
        setSuccess(true)
        },
        (error) => {
        console.log(error.text);
        setSuccess(false)
        });
    }

    return (
        <Section id="contact">
        <Container>
            <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
                <Title>Contact Me</Title>
                <Input placeholder="Name" name="name"/>
                <Input placeholder="Email" name="email"/>
                <TextArea placeholder="Write your message" name="message" rows={12}/>
                <Button type="submit">Send</Button>
                {success && "Your message has been sent!"}
            </Form>
            </Left>
            <Right>
                <Map/>
            </Right>
        </Container>
        </Section>
    )
}

export default Contact