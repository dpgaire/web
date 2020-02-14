import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Label,Form, Button } from 'reactstrap'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <Container>
                    <Form className="view-profile">
                        <Label className="first-name">First Name</Label><br></br>
                        <Label className="first-name">Last Name</Label><br></br>
                        <Label className="first-name">Address</Label><br></br>
                        <Label className="first-name">Username</Label><br></br>
                        <Button className="first-name">Update profile</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Profile
