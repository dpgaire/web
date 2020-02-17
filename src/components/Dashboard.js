import React, { Component } from 'react'
import axios from 'axios'
import{Container, Table,
    Navbar,
    Button} from 'reactstrap'
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
      const config={
        headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}
    }
        axios.get('http://localhost:3002/addfriend',config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                friends:response.data,
            })
        }).catch((err) => console.log(err));
}


handledelete=(friendId)=>{
  const config={
    headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}
}
    axios.delete(`http://localhost:3002/addfriend/${friendId}`,config)
    .then((response) => {
      this.props.history.push('/Dashboard');
        console.log(response.data)
        alert('deleted')

        const filterfriend=this.state.friends.filter((fri)=>{
          return fri._id!==friendId
        })

        this.setState({
            friends:filterfriend,
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
                      <th>Delete</th>
                    </tr>
                  </thead>
                <tbody>
                {
                    this.state.friends.map((friend)=> {
                        return<tr>
                
                      <td>{friend.firstName}</td>
                      <td>{friend.lastName}</td>
                      <td>{friend.phoneNumber}</td>
                      <td><Button btn-danger onClick={()=>this.handledelete(friend._id)}>Delete</Button></td>
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
