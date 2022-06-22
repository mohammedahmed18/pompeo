import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from '../cart/cart'
function NAVBAR() {
  return (
    <div className='navbar-section'>
      <div className='container'>
        <div className='d-flex'>
          <Navbar expand="lg" className='navbar col-10 col-md-11'>
            <NavLink className="logo" to="/"><h1>Pompeo</h1></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='' id="basic-navbar-nav">

              <Nav className="nav">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/about">about</NavLink>
                <NavLink className="link" to="/shop">shop</NavLink>
                <NavLink className="link" to="/contact">contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className='col-md-1 col-2'>
          <Cart />
          </div>
        </div>
      </div>

    </div>

  );
}

export default NAVBAR;
