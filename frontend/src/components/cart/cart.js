import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './cart.css';
import { NavLink } from 'react-router-dom';
function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='offcanves-component'>
      <div className='offcanves-btn d-flex  align-items-center' onClick={handleShow}>
        <div className='icon'><FaShoppingCart /></div>
        <span>cart</span>
      </div>
      <Offcanvas className='offcanves' show={show} onHide={handleClose}>
        <Offcanvas.Header className='offcanves-header p-2' closeButton>
                <h5>Your Cart</h5>
        </Offcanvas.Header>
        <div className='offcanves-body p-2'>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </div> 
        <div className='offcanves-footer p-2'>
            <div className='d-flex justify-content-between'>
                <span>Subtotal</span>
                <h5>price: 555</h5>
            </div>
            <NavLink to='/checkout' className='btn w-100 text-center py-4 my-3 bg-danger'>check out</NavLink>
        </div>
      </Offcanvas>
    </div>
  );
}
export default Cart