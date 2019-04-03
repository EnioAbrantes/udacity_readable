import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

export default function nav(){
    return (
        <Nav className="nav-options">
            <NavItem>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/newPost' activeClassName='active'>
                    Add Post
                </NavLink>
            </NavItem>
          </Nav>
    )
}
