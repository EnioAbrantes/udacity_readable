import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

export default function nav(){
    return (
        <Nav className="nav-options">
            <NavItem>
                <span style={{ fontSize: '35px', marginRight : '50px'}}>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </span>
            </NavItem>
            <NavItem>
                <span style={{ fontSize: '35px'}}>
                    <NavLink to='/newPost' exact activeClassName='active'>
                        Add Post
                    </NavLink>
                </span>
            </NavItem>
          </Nav>
    )
}
