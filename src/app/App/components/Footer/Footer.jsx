import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer =()=>{
    return(
    <footer className="ftco-section">
      {/* <LightBoxPresentation/> */}
        <div className="row mouse justify-content-center">
          <a href='#'>
            <i className='fa fa-angle-double-up fa-2x'></i>
          </a>
        </div>
        <div className="row fixScroll">
          <div className="col-md-2 offset-md-1">
            <h2>THINHVN</h2>
            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <ul className='ftco-icon-social'>
              <Link to='/#test'> <li ><i className="fa fa-skype fa-2x enable-animation"></i></li> </Link>
              <Link to='/#test'> <li ><i className="fa fa-facebook-official fa-2x enable-animation"></i></li> </Link>
              <Link to='/#test'> <li ><i className="fa fa-linkedin fa-2x enable-animation"></i></li> </Link>
            </ul>
          </div>
          <div className="col-md-2">
            <h2> MENU</h2>
            <ul>
              <Link to='/#test'> <li>Shop</li> </Link>
              <Link to='/#test'> <li>About</li> </Link>
              <Link to='/#test'> <li>Journal</li> </Link>
              <Link to='/#test'> <li>Conact Us</li> </Link>
            </ul>
          </div>
          <div className="col-md-3">
              <h2>HELP</h2>
              <div className ='fix-ul'>
                <ul >
                  <Link to='/#test'><li>Shipping Information</li> </Link>
                  <Link to='/#test'><li>Returns &amp; Exchange</li> </Link>
                  <Link to='/#test'><li>Terms &amp; Conditions</li> </Link>
                  <Link to='/#test'><li>Privacy Policy</li> </Link>
                </ul>
                <ul>
                  <Link to='/#test'> <li>FAQs</li> </Link>
                  <Link to='/#test'> <li>Contact</li> </Link>
                </ul>
                </div>
          </div>
          <div className="col-md-3">
            <h2>HAVE A QUESTIONS?</h2>
            <div className ='fix-ul'>
            <ul>
              <li> 
                <Link to='/#test'> 
                  <i className="fa fa-map-marker fa-lg ic-ft"></i> 
                </Link> 
                  203 Fake St. Mountain View, San Francisco, California, USA </li>
              <li> <Link to='/#test'><i className="fa fa-phone fa-lg ic-ft"></i></Link> +2 392 3929 210</li> 
              <li> <Link to='/#test'><i className="fa fa-google-plus fa-lg ic-ft"> </i></Link> info@yourdomain.com</li>  
            </ul>
            </div>
          </div>
      </div>
      <div className='row justify-content-center Copyright fixScroll'>
        <p>
          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="" target="_blank">thinhvn</a>  
        </p>
      </div>
    </footer>
    )
} 

export default Footer;