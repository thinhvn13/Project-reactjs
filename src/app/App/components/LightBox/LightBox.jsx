import React from 'react';
import { fake_gallerys } from './api_test';
import './LightBox.css';
import { ListItemLightBoxPresentation } from '../ListItemLightBox';

const LightBox =()=>{
    return(
        <>
            <div className='text-center contentLightBox '>
                <h2>Follow Us On Instagram</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the<br/> blind texts. Separated they live in</p>
            </div>
           <ListItemLightBoxPresentation fake_gallerys={fake_gallerys}/>
        </>
    )
};

export default LightBox;