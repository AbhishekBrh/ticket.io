import React from 'react'
import './Home.css';
import Nav from '../components/navbar/Nav';
import Body1 from '../components/body1/Body1';
import Body2 from '../components/body2/Body2';
import Body3 from '../components/body3/Body3';
import Footer from '../components/footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Nav/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Footer/>
    </div>
  )
}

export default Homepage
