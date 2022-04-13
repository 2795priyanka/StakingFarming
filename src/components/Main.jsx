import React from 'react'
import Header from '../common/Header'
import Home from './Home';
import StakeNow from './StakeNow';
import AboutUs from './AboutUs'
import HowItWorks from './HowItWorks';
import ContactUs from './ContactUs';
import Faq from './Faq';
import Footer from '../common/Footer';

function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <StakeNow/>
      <AboutUs/>
      <HowItWorks/>
      <ContactUs/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Main