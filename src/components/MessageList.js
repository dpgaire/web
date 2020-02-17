import React, { Component } from 'react'
import axios from 'axios'
import{Container, Table,
    Navbar,
    Button} from 'reactstrap'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'


export class MessageList extends Component {

   

    render() {
        return (
            <div><div><NavBar/>
                <div>
                
            <h3 class='offset-4' style={{fontWeight:'bold'},{marginTop:'60px'}}>Message list</h3>
          <div className="col-sm-8 offset-10" style={{ margin:'20px'}}>
          
          <Table  striped bordered hover size="9sm" style={{textAlign:"center"}}>
                  
                  <thead>
                    <tr>
                
                      <th>Username</th>
                      <th>Message</th>
                      <th>Time</th>
                      <th colSpan='3'>Actions</th>
                    </tr>
                  </thead>
                <tbody>
               
                    <tr>
                
                      <td>DP</td>
                      <td>Hello</td>
                      <td>2:55pm</td>
                      <td><Button href="/Message">Chat!!</Button></td>
                                          </tr>
                
              
                </tbody>
                
                </Table>
 </div>

            </div>
            </div>
            </div>
        )
    }
}

export default MessageList
