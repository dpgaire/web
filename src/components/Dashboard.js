import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{Container, Navbar} from 'reactstrap'
import NavBar from './NavBar'
import friendlist from './friendlist'

export class Dashboard extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
            <NavBar/>
                 <Container fluid className='col-md-12'>
                    <div className='col-md-4 jumbotron' >This is freind list</div>

                    <div className='col-md-8 jumbotron'>This is message view</div>
                </Container>
                
            </div>
        )
    }
}

export default Dashboard
