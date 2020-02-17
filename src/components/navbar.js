import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Button } from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
      
      <NavItem>
          <NavLink href="#" active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Message" >Message</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Profile">MyProfile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Addfriend">Add Friend</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  href="/Location">Location</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;