import React, { Component } from 'react'
import axios from 'axios'
import{Container, Table,
    Navbar} from 'reactstrap'
import NavBar from './NavBar'


export class Dashboard extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                friends:[],
                config: {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                },
                
            }
        }
        
    
    componentDidMount(){
        axios.get('http://localhost:3008/addfriend')
        .then((response) => {
            console.log(response.data)
            this.setState({
                friends:response.data,
            })
        }).catch((err) => console.log(err));
}

    

    render(){
return(
<div>
            <div><NavBar/>
          <div style={{ margin:'20px'}}>
          <Table striped bordered hover size="2sm">
                  
                  <thead>
                    <tr>
                
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                <tbody>
                {
                    this.state.friends.map((friend)=> {
                        return<tr>
                
                      <td>{friend.firstName}</td>
                      <td>{friend.lastName}</td>
                      <td>{friend.phoneNumber}</td>
                    </tr>
                
                    })
                  }
                </tbody>
                
                </Table>
 </div>

            </div>
            </div>
)
        
    
        
    }
}

export default Dashboard
