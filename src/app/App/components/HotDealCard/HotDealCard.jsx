import React from 'react';
import './HotDealCard.css';
import { Link } from 'react-router-dom';
import { CountingClockPresentation } from './../CountingClock/index';
const HotDealCard =({product})=>(
    <>
        <div className='header-hotdeal'>
            <span className='sub-header'>DEAL OF THE MONTH</span>
            <h2>Deal of the month</h2> 
        </div>
        <CountingClockPresentation time={product.time_sale}/>
        <div className='text-deal'>
            <Link to='/###'> <h2>{product.name_product}</h2> </Link>
            <p><span className='old-price'>{product.old_price}</span><span className='price-sale'>{product.sale_price}</span></p>
            <ul className='image-pro-sale'>
                <li className='img-item' style={{backgroundImage: `url(${product.image_1})`}}></li>
                <li className='img-item' style={{backgroundImage: `url(${product.image_2})`}}></li>
                <li className='img-item' style={{backgroundImage: `url(${product.image_3})`}}></li>
            </ul>
        </div>
    </>
)

export default HotDealCard;