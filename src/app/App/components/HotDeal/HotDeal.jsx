import React from 'react';
import './HotDeal.css';
import { HotDealCardPresentation } from './../HotDealCard/index';
import Asset from './../../asset/Asset';
import { APIHotDeal } from './Api-test';

const HotDeal =()=>{
    return(
        <section className='hot-deal'>
            <div className='container'>
                <div className='row'>
            <div className='col-md-6'>
                <img className='img-deal'src={Asset.image_hot_deal}></img>
            </div>
            <div className='col-md-6'>
                <HotDealCardPresentation product={APIHotDeal}/>
            </div>

                </div>
            </div>
        </section>
    )
}

export default HotDeal;