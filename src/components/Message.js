import React, { Component } from 'react'
import { Container, Form, FormGroup, Button } from 'reactstrap'
import Axios from 'axios'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             messages:[],
             message:'',
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    message=(e)=>{
        const config={
            headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        e.preventDefault();
        Axios.post(`http://localhost:3002/message`, this.state,config)
            .then((response) => {
                console.log(response.data)

                // const filtermessages=this.state.messages.filter((mess)=>{
                //     return 
                //   })

                this.setState({
                    message:'', 
                    //messages:filtermessages
                })
                alert("friend added!");
            }).catch((err) => console.log(err));
    }

    
    componentDidMount(){
        const config={
            headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
            Axios.get('http://localhost:3002/message',config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    messages:response.data,
                })
            }).catch((err) => console.log(err));

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
                        <label className="yourMessage" > 
                        {this.state.messages.map((mes)=>{
                            return <h4>
                                <h3>{mes.message}</h3>
                            </h4>
                        })}
                        {this.state.message.message}
                        
                        </label><br></br>
                            <input type="text" name="message" className="typeMessage" placeholder="Type your message"
                            value={this.state.message} onChange={this.handleChange}></input>
                            <Button onClick={this.message} className="btnSend">Send</Button>
                        </FormGroup>
                    </Form>
                </div>
                </Container>
            </div>
        )
    }
}

export default Message
