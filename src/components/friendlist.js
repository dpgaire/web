import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

export class friendlist extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Container>
                    <div className='col-md-4 jumbotron' >This is freind list</div>
                </Container>
            </div>
        )
    }
}

export default friendlist
