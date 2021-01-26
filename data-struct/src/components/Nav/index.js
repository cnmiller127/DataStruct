import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import "./style.css";

const NavEx = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id = "navBar" light >
        <NavbarBrand href="/DataStruct/#/array" className="mr-auto" id = "brand">DS VISUALIZATION TOOL</NavbarBrand>
        <NavbarText id = "tools">🛠️</NavbarText>
        <NavbarToggler id = "navToggler" onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className = "navLink" href= "/DataStruct/#/array">Array</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navLink" href="/DataStruct/#/tree">Balanced Binary Tree</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavEx;