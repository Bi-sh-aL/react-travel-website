import React from "react";
import "./footer.scss";
import {AiFillFacebook,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <div className="foot container pt-5">
        <div className="row text-light text-start">
          <div className="col-lg-3 col-md-6 sm-6">
            <h5 className="position-relative pb-2">About us</h5>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
            <div>
                <AiFillFacebook size={30}/>
                <AiOutlineTwitter size={30} className="mx-1"/>
                <AiFillLinkedin size={30}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
          
            
                <h5 className="position-relative pb-2">Quick Link</h5>
              <li>Holiday Package</li>
              <li>Summer Adventure</li>
              <li>Bus and Transportation</li>
              <li>Ticket and Hotel Booking</li>
              <li>Trek and Hiking</li>
           
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
            <h5 className="position-relative pb-2">Contact us</h5>
            <p>Bishal Shrestha</p>
            <a
              href="mailto:bsal.stha123@gmail.com"
              className="text-light text-decoration-none"
            >
              bsal.stha123@gmail.com
            </a>
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
            <h5 className="position-relative pb-2">Subscribe Newsletter</h5>
            <form action="">
              <input type="text" />
              <br />
              <button className="btn bg-success text-light rounded-0 my-3 py-1">
                Send
              </button>
            </form>
          </div>
          <small className="text-center text-light py-3">&copy; Copyright 2023</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
