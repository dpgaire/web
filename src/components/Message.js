import React, { Component } from 'react'
import { Container, Form, FormGroup, Button } from 'reactstrap'


export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <Container>
                    <h1 className="title">Chating</h1>
                    
                <div>
                    <Form className="messageForm">
                        <FormGroup>
                        <label className>Friend Message</label><br></br>
                        <label className="yourMessage" > Your Message</label><br></br>
                            <input type="text" className="typeMessage" placeholder="Type your message"></input>
                            <Button className="btnSend">Send</Button>
                        </FormGroup>
                    </Form>
                </div>
                </Container>
            </div>
        )
    }
}

export default Message
