import React from 'react';
import './ChooseShop.css'
import Asset from './../../asset/Asset';
import { Link } from 'react-router-dom';

const ChooseShop=()=>{
    return(
        <section className='shop-choose'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 shop_1'>
                        <div style={{backgroundImage:`url(${Asset.img_chooses[0]})`}} className='img-choose shop_1-img'>
                        <div className='content-choose'> 
                            <span> MEN'S SHOES</span>
                            <h2>Men's Collection</h2>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p > <Link  to='#' className='btn-choose-shop'>Shop now </Link></p>
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-md-12 cls'>
                            <div className='img-choose shop_2-img' style={{backgroundImage:`url(${Asset.img_chooses[1]})`}}>
                                <div className='col-md-7 shop_2'>
                                    <div className='content-choose'>
                                        <span> WOMEN'S SHOES</span>
                                        <h2>Women's Collection</h2>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <p > <Link  to='#' className='btn-choose-shop'>Shop now </Link></p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-6 shop_3'>
                                    <div className='content-choose'>
                                        <span style={{color:'black'}}> SUMMER SALE</span>
                                        <h2>Extra 50% Off</h2>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <p > <Link  to='#' className='btn-choose-shop'>Shop now </Link></p>
                                    </div>
                                </div>
                                <div className='col-md-6 shop_4'>
                                    <div className='img-choose' style={{backgroundImage:`url(${Asset.img_chooses[2]})`}}>
                                    <div className='content-choose'> 
                                        <span > SHOES</span>
                                        <h2>Best Sellers</h2>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <p > <Link  to='#' className='btn-choose-shop'>Shop now </Link></p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )

}
export default ChooseShop;