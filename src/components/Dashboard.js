import React, { Component } from 'react'
import axios from 'axios'
import{Container, Navbar} from 'reactstrap'
import NavBar from './NavBar'


export class Dashboard extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 friend:{},
            }
        }
        
    
    componentDidMount(){
        axios.get(`http://localhost:3008/addfriend`, this.state)
        .then((response) => {
            console.log(response.data)
        
            this.setState({
                friend:response.data,
            })
           
        }).catch((err) => console.log(err));
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
