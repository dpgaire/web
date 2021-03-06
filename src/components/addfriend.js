import React, { Component } from 'react'
import axios from 'axios' 
import App from '../App.css'
import { Container, FormGroup, Button,Form ,Label, Input,  FormText,FormFeedback} from 'reactstrap'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom'

export class addfriend extends Component {


constructor(props) {
    super(props)

    this.state = {
         firstName:' ',
         lastName:'',
         phoneNumber:'',
         config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        },
         isclicked:false
    }
 
}
handleChange=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSubmit = (event) => {
    const config={
        headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}
    }
    event.preventDefault();
    axios.post(`http://localhost:3002/addfriend`, this.state,config)
        .then((response) => {
            console.log(response.data)
        
            this.setState({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                isclicked:true
                
            })
            alert("friend added!");
        }).catch((err) => console.log(err));
}


    render() {
        if(this.state.isclicked){
            return<Redirect to="/Dashboard" />
        }
        return (
            <div><NavBar/>
            <div>
                <Container className=" jumbotron" style={{marginTop:100,width:800}}>
                   <Form className="addform col-sm-6">
                   <h1 className="title" style={{marginRight:70}}>Add friend</h1><hr />
                   <FormGroup>
                            <Label for="exampleEmail">First Name:</Label>
                            <Input type="text" name='firstName' placeholder="Enter First name" 
                            value={this.state.firstName} onChange={this.handleChange} />          
                        </FormGroup>
                       <FormGroup>
                            <Label for="exampleEmail">Last Name:</Label>
                            <Input type="text" name='lastName' placeholder="Enter last name" 
                            value={this.state.lastName} onChange={this.handleChange} />          
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Phonenumber:</Label>
                            <Input type="text" name='phoneNumber' placeholder="Enter phoneNumber" 
                            value={this.state.phoneNumber} onChange={this.handleChange} />          
                        </FormGroup>
                        <Button color='warning' onClick={this.handleSubmit}  block>Add Friend</Button>
                   </Form>
                </Container>
            </div>
            </div>
        )
    }
}

export default addfriend
