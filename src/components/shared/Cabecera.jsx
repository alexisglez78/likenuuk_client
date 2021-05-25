import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FiLogOut } from "react-icons/fi";



export default function Cabecera() {
    return (
        <div>
            <Navbar className=" bg-dark" style={{paddingLeft: '10px',paddingRight:' 10px'}}>
                <Navbar.Brand href="#home" className="text-primary ">Welcome</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text >
                        <a href="#login" className="text-primary "><FiLogOut /></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
