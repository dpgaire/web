import React, { Component } from 'react'
import axios from 'axios' 
import App from '../App.css'
import { Container, FormGroup, Button,Form } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export class addfriend extends Component {


constructor(props) {
    super(props)

    this.state = {
         firstName:' ',
         lastName:'',
         phoneNumber:'',
         isclicked:false
    }
 
}
handleChange=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3008/addfriend`, this.state)
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
            <div>
                <Container className=" jumbotron">
                   <Form className="addform">
                   <h1 className="title">Add friend</h1><hr />
                       <FormGroup>
                           <label htmlFor="firstname">FirstName:</label><br />
                           <input type='text' name='firstName' placeholder="Enter first name" className="input"
                           value={this.state.firstName} onChange={this.handleChange} />
                       </FormGroup>
                       <FormGroup>
                           <label >LastName:</label><br />
                           <input type='text' name='lastName' placeholder="Enter last name"  className="input"
                           value={this.state.lastName} onChange={this.handleChange} />
                       </FormGroup>
                       <FormGroup>
                           <label >Phonenumber:</label><br />
                           <input type='text' name='phoneNumber' placeholder="Enter phoneNumber"  className="input"
                           value={this.state.phoneNumber} onChange={this.handleChange} />
                       </FormGroup>
                        <Button color='warning' onClick={this.handleSubmit} className="btnaddfriend">Add Friend</Button>
                   </Form>
                </Container>
            </div>
        )
    }
}

export default addfriend
