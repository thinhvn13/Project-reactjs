import React from 'react';
import './HotDealCard.css';
import { Link } from 'react-router-dom';
import { CountingClockPresentation } from './../CountingClock/index';
import PropTypes from 'prop-types';
import Asset from './../../asset/Asset';

const HotDealCard =({product})=>(
    <>
        {console.log(product.image_1)}
        <div className='header-hotdeal'>
            <span className='sub-header'>DEAL OF THE MONTH</span>
            <h2>Deal of the month</h2> 
        </div>
        <CountingClockPresentation time={{dd:product.dd,hh:product.hh,mm:product.mm,ss:product.ss}}/>
        <div className='text-deal'>
            <Link to='/###'> <h2>{product.name_product}</h2> </Link>
            <p><span className='old-price'>{product.old_price}</span><span className='price-sale'>{product.sale_price}</span></p>
            <ul className='image-pro-sale'>
                {
                    [...Array(product.number_img).keys()].map((item, i)=>
                    <li className='img-item' style={{backgroundImage: `url(${Asset.listImageProduct[item]})`}} key={i}></li>
                    )
                }
            </ul>
        </div>
    </>
)

HotDealCard.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default HotDealCard;