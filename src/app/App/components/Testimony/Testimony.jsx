import React from 'react';
import './Testimony.css';
import { BenefitCardsPresentation } from './../BenefitCards/index';
import { BestCommentPresentation } from '../BestComment';
import {APIComments} from './Api-test';
import { connect } from 'react-redux';

const Testimony=({comments})=>{
    return(
        <section className='testimony'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-5'>
                <BenefitCardsPresentation/>
            </div>
            <div className='col-lg-7'>
                {comments.length==0? null:
                <BestCommentPresentation comments={comments}/>}
            </div>
            </div>    
        </div>
        </section>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return({
        comments: state.comments,
    })
};

export const ConnectedTestimony = connect(mapStateToProps, )(Testimony);
