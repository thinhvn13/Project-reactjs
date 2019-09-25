import React from 'react';
import './HotDeal.css';
import { HotDealCardPresentation } from './../HotDealCard/index';
import Asset from './../../asset/Asset';
import { APIHotDeal } from './Api-test';
import { connect } from 'react-redux';

const HotDeal =({hotdeal})=>{
    return(
        <section className='hot-deal'>
            <div className='container'>
                <div className='row'>
            <div className='col-md-6'>
                <img className='img-deal'src={Asset.image_hot_deal}></img>
            </div>
            <div className='col-md-6'>
                {hotdeal==undefined? null:
                <HotDealCardPresentation product={hotdeal}/>}
            </div>

                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state, ownProps)=>{
    return({
        hotdeal: state.hotdeal[0],
    })
};

export const ConnectedHotDeal = connect(mapStateToProps, )(HotDeal); 
