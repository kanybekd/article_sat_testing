import React from 'react'
import { Nav, NavItem, NavLink } from "reactstrap"
import { Link } from "react-router-dom"
function MenuBar() {
    return (
        <Nav
        >
            <NavItem>
                <NavLink
                    active

                >
                    <Link to='/'>
                        Home
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <Link to='/about'>
                        About
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink

                >
                    <Link to='/articleList'>
                        Article List
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default MenuBar