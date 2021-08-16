import React from 'react';
import './contactpage.css';

function contactpage() {
  return (
    <>
     <section class="contact">
      <div class="content">
        <h2>Contact Us</h2>
        <p> Loren ipsaasdfasdfasdfasdfasdfasdfasdfasdfasdf </p>
      </div>
      <div class="container">
        <div class="contentInfo">
          <div class="box">
            <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
            <div class="text">
              <h3>Email</h3>
              <p>rjanardhan3@gatech.edu</p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div class="text">
              <h3>Phone</h3>
              <p>650-455-2045</p>
            </div>
          </div>
        </div>
        <div class="contactForm">
          <form>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span>Email</span>
            </div>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
              <span>Type your Message...</span>
            </div>
            <div class="inputBox">
              <input type="submit" name="" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
     </section>
    </>
  )
}

export default contactpage;
