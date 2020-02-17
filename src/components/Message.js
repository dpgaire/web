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
                // alert("friend added!");
                
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
                <Container ju style={{backgroundColor:'lightgreen'}}>                
                    <Form >
                   
                        <FormGroup style={{height:'250px',overflow:'auto'}}>
                                                
                        <label style={{position:'relative'}}>Friend Message: </label>
                        <label>Hello DP ! How are you ?</label>

                        
                        
                       
                        {this.state.messages.map((mes)=>{
                            return <h4>
                                <h6>DP:{mes.message}</h6>
                            </h4>
                        })}
                        {this.state.message.message}
                    
                            
                        </FormGroup>
                        <FormGroup style={{marginBottom:300}}>
                        <input type="text" name="message" className="typeMessage" placeholder="Type your message"
                            value={this.state.message} onChange={this.handleChange}></input>
                            <Button onClick={this.message} className="btnSend">Send</Button>
                            </FormGroup>
                    </Form>
         
                </Container>
            </div>
        )
    }
}

export default Message
