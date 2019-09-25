import React,{useEffect} from 'react';
import './HomePage.css';
import { TestimonyContainer } from '../../components/Testimony';
import { HotDealPresentation } from './../../components/HotDeal/index';
import { ChooseShopPresentation } from '../../components/ChooseShop';
import { NewProductsPresentation } from './../../components/NewProducts/index';
import { ServicePresentation } from './../../components/Service/index';
import { CarouselBannerPresentation } from './../../components/CarouselBanner/index';
import { requestState } from './../../../store/mutations';

const HomePage=()=>{
    return(
        <>
            <CarouselBannerPresentation/>
            <ServicePresentation/>
            <NewProductsPresentation/>
            <ChooseShopPresentation/>
            <HotDealPresentation/>
            <TestimonyContainer/>
        </>
    )
}

export default HomePage;