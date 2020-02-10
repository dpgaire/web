import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, FormGroup } from 'reactstrap'

export class addfriend extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Container>

                <Modal isOpen={showEdit} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Add Friend
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
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
                       <Label for='phoneNumber'>phoneNumber</Label>
                        <Input type='text' name='phoneNumber' id='phonenumber'
                            value={this.state.lastName} onChange={this.handleChange} />  
                       </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.handleSubmit}>Save</Button>
                    </ModalFooter>
                </Modal>
                </Container>
            </div>
        )
    }
}

export default addfriend
