import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg';



const Header = () => {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,.1)',
    zIndex: 1000,


  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
   
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
    
    marginLeft: '40%',
  };

  return (
    <Navbar fixed="top" style={navbarStyle}>
      <Container style={containerStyle}>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={logoStyle}
          />
        </Navbar.Brand>
        <Navbar.Text style={titleStyle}>Image Gallery</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
