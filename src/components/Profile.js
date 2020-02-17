import React, { Component } from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Container, Label,Form, Button,input,Jumbotron,FormGroup,Input,FormText } from 'reactstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:{},
             isUpdated:false,
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }
    handleChange=(e)=> {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
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
    handleSubmit = (event) => {
        event.preventDefault();
        Axios.put('http://localhost:3002/user/me', this.state.users,this.state.config)
            .then((response) => {
                console.log(response)
                alert("User updated")
                localStorage.setItem('token', response.data.token);
                this.setState({
                    
                    isUpdated:true
                })
            }).catch((err) => console.log(err));
    }

    render() {
        if(this.state.isUpdated===true){
            return <Redirect to="/Dashboard"/>
        }
        return (
            <div>
 <Form className="addform">
                <Jumbotron style={{marginTop:100}}>
                
                    <h3 class='offset-4' style={{fontWeight:'bold'}}>Me</h3>
               
                <FormGroup colSpan>
                            <legend>My profile</legend><hr/>
                            <Label for="exampleEmail">First name</Label>
                            <Input type="text" name='firstName' placeholder={this.state.users.firstName}
                        value={this.state.firstName} 
                        onChange={this.handleChange} />          
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Last name</Label>
                            <Input type="password" name='lastName' placeholder={this.state.users.lastName}
                        value={this.state.lastName} 
                        onChange={this.handleChange} />          
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">address</Label>
                            <Input type="password" name='address'  placeholder={this.state.users.address}
                        value={this.state.address}/>          
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="password" name='username' placeholder={this.state.users.username}
                        value={this.state.username} />          
                        </FormGroup>

                    <Button color='primary' onClick={this.handleSubmit}>Update profile</Button>
                    <FormText>Check to? <Link to='/Dashboard'>Back to dashboard</Link> </FormText>
                    </Jumbotron>
                </Form>
                
                    
            </div>
        )
    }
}

