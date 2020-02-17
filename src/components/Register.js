import React, { Component } from 'react'
import { Container, Form, FormGroup, Label, Input, Button, FormText,FormFeedback, Jumbotron, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            address:'',
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3002/user/signup', this.state)
            .then((response) => {
                console.log(response)
                alert("Register sucessful")
                localStorage.setItem('token', response.data.token);
                this.setState({
                    firstName: '',
                    lastName: '',
                    address:'',
                    username: '',
                    password: ''
                })
            }).catch((err) => console.log(err));
    }

    render() {
        // if (localStorage.getItem('token')) {
        //     return <Redirect to='/dashboard' />
        // }
        return (
            <Container>
               
                <Form>
                <Jumbotron>
                <legend style={{textAlign:'center'}}>Register Form</legend><hr></hr>
                    <div className='col-sm-6 offset-3' >
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input type='text' name='firstName' id='firstName'
                            value={this.state.firstName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input type='text' name='lastName' id='lastName'
                            value={this.state.lastName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input name='username' id='username' type='text'
                            value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleSubmit}>Register!</Button>
                    <FormText>Already a user. <Link to='/'>Login here!</Link></FormText>
                   </div>
                    </Jumbotron>
                </Form>
            </Container>
        )
    }
}
