import React, { Component } from 'react'
import { FormGroup, Container,Label,Form,Input,Button,FormText, Jumbotron } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        const config = {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        e.preventDefault();
        axios.post('http://localhost:3002/user/login', this.state,config)
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                
                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true
                })
            })
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/Dashboard' />
        }
        return (
           
            <Container fluid>
               
                <Form className="addform">
                <Jumbotron style={{marginTop:100}}>
                
                    <h3 class='offset-4' style={{fontWeight:'bold'}}>trackME !</h3>
               
                <FormGroup colSpan>
                            <legend>Login Form</legend><hr/>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name='username' placeholder="Enter user name" 
                            value={this.state.username} onChange={this.handleChange} />          
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Password</Label>
                            <Input type="password" name='password' placeholder="Enter password" 
                            value={this.state.password} onChange={this.handleChange} />          
                        </FormGroup>
                    <Button color='primary' onClick={this.handleClick}>Login!</Button>
                    <FormText>Not yet a user? <Link to='/Register'>Register here!</Link> </FormText>
                    </Jumbotron>
                </Form>
                
            </Container>
           
        )
    }
}
