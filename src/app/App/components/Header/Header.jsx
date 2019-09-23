import React from 'react';
import './Header.css';

const Header=()=>(
    <div className='headerContent'>
    <div className='container'>
        <div className='row justify-content headerContent'>
        <div className='col-md-3'>
            <span><i className="fa fa-mobile-phone"></i></span>
            <span> + 079 2159 335</span>
        </div>
        <div className='col-md-4 align-items-center text-lg-left'>
        <span><i className="fa fa-send"></i></span>
            <span> THINHVN13@GMAIL.COM</span>
            
        </div>
        <div className='col-md-5 align-items-center text-lg-right'>
            <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
        </div>
        </div>
    </div>
    </div>
)


export default Header;