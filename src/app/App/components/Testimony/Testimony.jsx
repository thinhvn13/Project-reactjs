import React from 'react';
import './Testimony.css';
import { BenefitCardsPresentation } from './../BenefitCards/index';
import { BestCommentPresentation } from '../BestComment';
import {APIComments} from './Api-test';

const Testimony=()=>{
    return(
        <section className='testimony'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-5'>
                <BenefitCardsPresentation/>
            </div>
            <div className='col-lg-7'>
                <BestCommentPresentation comments={APIComments}/>
            </div>
            </div>    
        </div>
        </section>
    )
}

export default Testimony;