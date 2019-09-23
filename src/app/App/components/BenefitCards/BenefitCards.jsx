import React from 'react';
import './BenefitCards.css';

const BenefitCards=()=>(
    <div className='ServiceFlow'>
        <div className='CardService1'>
            <div className='icon'>
                <i className='fa fa-money fa-4x'> </i>
            </div>
            <div className='text'>
                <h3>Free Shipping</h3>
                <p>Separated they live in. A small river named Duden flows</p>
            </div>
        </div>
        <div className='CardService2'>
            <div className='icon'>
                <i className='fa fa-dribbble fa-4x'></i>
            </div>
            <div className='text'>
                <h3>Valuable Gifts</h3>
                <p>Separated they live in. A small river named Duden flows</p>
            </div>
        </div>
        <div className='CardService3'>
            <div className='icon3'>
                <i className='fa fa-credit-card fa-4x'></i>
            </div>
            <div className='text'>
                <h3>All Day Support</h3>
                <p>Separated they live in. A small river named Duden flows</p>
            </div>
        </div>
        <div className='CardService4'>
            <div className='icon3'>
                <i className='fa fa-mixcloud fa-4x'></i>
            </div>
            <div className='text'>
                <h3>All Day Support</h3>
                <p>Separated they live in. A small river named Duden flows</p>
            </div>
        </div>
    </div>
)

export default BenefitCards;