import React from 'react';
import { Navbar, Nav, Form, FormControl, Badge, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <Navbar expand="lg" fixed="top"
     style={{
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        paddingTop: '0px',
        paddingBottom: '0px',
        backgroundColor: '#052047',
      }}
    >
      <Navbar.Brand style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="Logo"
          style={{
            height: '65px',
            marginRight: '20px',
            marginLeft: '20px',
            width: 'auto',
          }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Form inline className="d-flex ms-auto me-auto" style={{ flexGrow: 1, justifyContent: 'center' }}>
            <FormControl type="text" placeholder="Search products" className="mr-sm-2"
              style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #87CEEB, #4682B4)',
                borderRadius: '5px',
                padding: '5px 10px',
                color: '#fff',
                minWidth: '350px',
                width: '100%',
                marginRight: '10px',
              }}
            />
          </Form>

          <Dropdown className="ms-3 mt-2">
            <Dropdown.Toggle variant="light" id="dropdown-basic"
              style={{
                backgroundColor: '#e0e0e0',
                color: '#000',
                borderRadius: '5px',
                marginTop: '5px',
              }}
            >
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Clothing</Dropdown.Item>
              <Dropdown.Item>Electronics</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <Nav className="ms-auto mt-2">
          <div style={{ color: '#fff', display: 'flex', alignItems: 'center', marginRight: '20px'}} className='mt-2'>
            <FaShoppingCart style={{ fontSize: '20px' }} />
            <Badge bg="light" text="dark" style={{ marginLeft: '5px', verticalAlign: 'top' }}>0</Badge>
          </div>
          <div style={{ color: '#fff', display: 'flex', alignItems: 'center', marginRight: '20px' }} className='mt-2'>
            <FaHeart style={{ fontSize: '20px', color: 'red' }} />
            <Badge bg="light" text="dark" style={{ marginLeft: '5px', verticalAlign: 'top' }}>0</Badge>
          </div>
          <div style={{ color: '#fff', marginRight: '20px' }} className='mt-2'>Login</div>
          <div style={{ color: '#fff',marginRight:'20px' }} className='mt-2'>Sign Up</div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
