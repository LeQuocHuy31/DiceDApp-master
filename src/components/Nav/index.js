import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { ethers } from "ethers";
function Navigation()  {
    // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });
    const [user, setUser] = useState("ThankZ");
    const handleConnect = () => {
        if (window.ethereum) {
  
            // res[0] for fetching a first wallet
            window.ethereum
              .request({ method: "eth_requestAccounts" })
              .then((res) => accountChangeHandler(res[0]));
          } else {
            alert("Install metamask extension!!");
          }
    };
    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {
    
        // Requesting balance method
        window.ethereum
        .request({ 
            method: "eth_getBalance", 
            params: [address, "latest"] 
        })
        .then((balance) => {
            // Setting balance
            setdata({
            Balance: ethers.utils.formatEther(balance),
            });
        });
    };
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
        address: account,
        });
        // Setting a balance
        getbalance(account);
    };
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Dice DApp</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={user} id="basic-nav-dropdown" style={{marginLeft:'50px'}}>
                            <NavDropdown.Item href="/user"><Link to="/user" style={{textDecoration: 'none', color: 'black'}}>Profile</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={handleConnect}>Connect MetaMask</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" onClick={handleConnect}>Connect MetaMask</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;