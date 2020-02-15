import React, { Component } from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Container, Label,Form, Button,input } from 'reactstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:{},
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    componentDidMount(){
        Axios.get('http://localhost:3002/user/me',this.state.config)
        .then((response) => {
            //console.log(response.data)
            //localStorage.setItem('token',response.data.token)
            this.setState({
                users:response.data,
            }) 
        }).catch((err) => console.log(err))

    }
    

    render() {
        return (
            <div>

                    <Form className="view-profile">
                    <h1>User Profile</h1>
                        <input type="text" className="first-name" 
                        value={this.state.users.firstName} 
                        onChange={this.handleChange}></input><br></br>

                        <input type="text" className="first-name" 
                        value={this.state.users.lastName} 
                        onChange={this.handleChange}></input><br></br>

                        <input type="text" className="first-name" value={this.state.users.address}></input><br></br>
                        <input type="text" className="first-name" value={this.state.users.username}></input><br></br>
                        <Button className="btnUpdate"><Link to='/UpdateProfile'></Link>Update profile</Button>
                    </Form>               
            </div>
        )
    }
}

