import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg='navbar-dark bg-success' variant='dark'>
      <Container fluid='md'>
        <Navbar.Brand className='headerText'>
          <h2>React Employee Directory</h2>
        </Navbar.Brand>
        <SearchForm />
      </Container>
    </Navbar>
  );
};

export default Header;
