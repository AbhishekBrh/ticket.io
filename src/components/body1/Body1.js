import React, { useState } from 'react'
import './Body1.css';


const Body1 = () => {

  return (
    <div className='body1'>
      <div className="body-left">
      <h1>Confirm & pay</h1>
        <div className="text">
          <h3>Free Cancellation<i class="fa-solid fa-circle-info"></i></h3>
          <p>Tickets can be cancelled by 13th December, 2022.</p>
        </div>
        <div className="text2">
          <div className="details1">
            <h2>Enter your details</h2>
            <p>We'll be sending your tickets to the details below.</p>
          </div>
          <form>
            <div className="form-group">
              <input className='fr' type="text" placeholder='Full name*' required /><br />
              <div className="form-grp1">
                <select id="options" required>
                  <option value="" disabled selected><label htmlFor="options"><i class="fa-solid fa-earth-americas" />Country code<span style={{ color: "red" }}>*</span></label></option>
                  <option value="option1">+91</option>
                  <option value="option2">+92</option>
                  <option value="option3">+93</option>
                  <option value="option4">+94</option>
                </select>
                <input type="text" placeholder='Phone number*' /><br />
              </div>
              <div className="form-grp1">
                <input className='email' type="text" placeholder='Email*' />
                <input type="text" placeholder='Confirm Email*' />
              </div>
            </div>
          </form>
          <hr />
        </div>
        <div className="text3">
          <div className="details2">
            <h2>Additional Information</h2>
            <p>We need few more details to complete your information</p>
            <div className="form-grp1">
              <input type="text" placeholder='Input Label*' />
              <select id="options" required>
                <option value="" disabled selected><label htmlFor="options"><i class="fa-solid fa-earth-americas" />Select<span style={{ color: "red" }}>*</span></label></option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
              </select>
              <select id="options2" required>
                <option value="" disabled selected><label htmlFor="options"><i class="fa-solid fa-earth-americas" />MultiSelect<span style={{ color: "red" }}>*</span></label></option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="body-right">
        <div className="pic">
          <img src="./img/pic1.jpg" alt="" />
        </div>
        <div className="r-details">
          <i class="fa-solid fa-star"></i><b>4.9</b><span>4.5K</span>
          </div>
          <div className="a-details">
            <h5>Amsterdam open boat canal cruise -Live Guiye - from Anne Frank Housef</h5>
            <div className="b-details">
            <i class="fa-solid fa-ticket"></i> <b>{"<Ticket type - Variant>"}</b><br />
            <i class="fa-solid fa-calendar-days"></i><b>{"<Day>,<Month> <Year>"}</b>
            <p>Duration : {"<Duration>"}</p>
            <i class="fa-solid fa-clock"></i><b>{"<Time>"}</b>
            <p>Operating hours: {"<time> to <time>"} </p>
            <i class="fa-solid fa-person-walking-luggage"></i><b>5 Guests</b>
            </div>
            <hr />
          </div>
          <div className="details">
          <style>
            {`
              summary::before {
                content: '+';
                margin-right: 0.5em;
              }

              details[open] summary::before {
                content: 'x';
              }
              summary::-webkit-details-marker {
                display: none;
              }
              summary {
                list-style-type: none;
              }
            `}
          </style>
          <details>
            <summary>View summary details</summary>
            <p>This is Summary Details</p>
          </details>
          <hr/>
          </div>
          <div className="details2">
            <div>
            <h3>Total Payable</h3>
            <h3>$XXX</h3>
            </div>
            <button><i class="fa-solid fa-piggy-bank"></i>You saved {"<Price>"}</button>
            <h6>You will be charged in AED<i class="fa-solid fa-circle-info"></i></h6>
            <p>By clicking "confirm & pay", you agree to <a href="#">Tickete's geenral terms and conditions</a> and <a href="#">cancellation policy.</a></p><a href="#"></a>
            <button className='btn'> <i class="fa-solid fa-bag-shopping"></i> Confirm and pay</button>
          </div>
      </div>
    </div>
  )
}

export default Body1
