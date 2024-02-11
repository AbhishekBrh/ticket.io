import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src="./img/tic2.png" alt="" />
      <hr />
      <div className="f-details">
        <p>Made with 💗</p>
        <ul>
          <li>Privacy policy</li>
          <li>Terms of useage</li>
          <li>Cancellation policy</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
