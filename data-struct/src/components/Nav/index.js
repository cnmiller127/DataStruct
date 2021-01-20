import React, {useEffect, useContext, useState} from "react";
import "./style.css";
import {   Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, } from 'reactstrap';

function NavExp() {
  
  // const NavStat = () => {
  //   const contextVal = useContext(NavContext);
  //   return contextVal;
  
  // }
  //   const navStatus = NavStat();
  //   console.log(navStatus)
  
    // useEffect( () => {
        
        
    //     }, [navStatus.status]);

  const [isOpen, setIsOpen] = useState(false);      
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color="info" light expand="md">
    <NavbarBrand href="/">DATA STRUCTURE VISUALIZATION TOOL</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem >
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href = '#'>Array</NavLink>
        </NavItem>
      </Nav>
      <NavbarText></NavbarText>
    </Collapse>
  </Navbar>
</div>
    );
}

export default NavExp;