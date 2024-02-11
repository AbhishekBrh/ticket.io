import React from 'react';
import './Body2.css';

const Body2 = () => {
  return (
    <div className='body2'>
      <div className="container">
        <h1>Select mode of payment</h1>
        <p>Payments with tickete are secure and encrypted.</p>
      </div>
      <div className="container2">
        <p><i class="fa-solid fa-credit-card"></i>Credit & debit card </p>
        <div className="container3">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-diners-club"></i>
        </div>
        <div className="container4">
          <input type="text" placeholder='Name on card*' />
          <input type="text" placeholder='Card Number*' /><br />
          <input type="text" placeholder='Expiry date*' />
          <input type="text" placeholder='CVV/CVC*' />
        </div>
        <hr />
        <div className="container5">
          <h3>Total payable: $XXX</h3>
          <p>You will be charged in AED<i class="fa-solid fa-circle-info"></i></p>
          <span>Bt clicking "confirm and pay" <a href="#">Tickete's general term and conditions </a>and <a href="#">cancellation policy</a></span>
          <button> <i class="fa-solid fa-bag-shopping"></i> Confirm and pay</button>
        </div>
      </div>
      <div className="pay">
        <div className="pay1">
        <i class="fa-brands fa-apple-pay"></i><label for="html">Comming Soon</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
        </div>
        <div className="pay1">
        <i class="fa-brands fa-google-pay"></i><label for="html">Comming Soon</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
        </div>
      </div>
      <hr />
      <div className="container6">
        <h2>Total payable: $XXX</h2>
        <div className="box">
          <h5><i class="fa-solid fa-circle-info"></i>You will be charged in AED</h5>
          <p>The price shown hereis in US Dollar (USD) as per the current conversion rate.You will be charged in United Arab Emirates Dirham (AED). </p>
        </div>
      </div>
    </div>
  )
}

export default Body2
