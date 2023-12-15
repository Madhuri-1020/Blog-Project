import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Logo from '../Assets/logo_image.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  let user = JSON.parse(localStorage.getItem('user'))
  const naviagate = useNavigate();

  function logout() {
    localStorage.clear();
    naviagate('/register')

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} alt='image' className='w-25 h-25' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            <Nav.Link as={Link} to="/create-blog">Create Blog</Nav.Link>
            {localStorage.getItem('user') ?
              <>
                <Nav.Link onClick={logout}>LogOut</Nav.Link>
                <Nav.Link 
                style={{backgroundColor:'blue', color:'white',borderRadius:'20px'}}>
                  {user && user.name}
                  </Nav.Link>
              </>
              :
              <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
            }
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
