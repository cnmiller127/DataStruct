import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import "./style.css";

const NavEx = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id = "navBar" light >
        <NavbarBrand href="/data-struct/#/tree" className="mr-auto" id = "brand">DS VISUALIZATION TOOL</NavbarBrand>
        <NavbarText id = "tools">🛠️</NavbarText>
        <NavbarToggler id = "navToggler" onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className = "navLink" href= "/data-struct/#/array">Arrays</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navLink" href= "/data-struct/#/linkedList">Linked Lists</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navLink" href="/data-struct/#/stack">Stacks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navLink" href="/data-struct/#/queue">Queues</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navLink" href="/data-struct/#/tree">Balanced Binary Trees</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavEx;