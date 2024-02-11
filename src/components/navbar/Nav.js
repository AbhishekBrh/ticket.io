import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div className='navb'>
        <nav>
            <img src="./img/tic.png" alt="" />
            <p><i class="fa-solid fa-lock"></i>Checkout</p>
            <p><i class="fa-solid fa-question"></i>Help</p>
        </nav>
       <div className="hr-line">
        <p>Holding your tickets for 30:00</p>
       </div>
    </div>
  )
}

export default Nav
