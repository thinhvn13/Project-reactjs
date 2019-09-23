import React from 'react';
import './NewProducts.css';
import { ProductCardPresentation } from '../ProductCard/index';
import { Products } from './fake-data';
const NewProducts=()=>{
    const HeaderNewProduct=()=>{
        return(
        <div className='container'>
            <div className='row'>
                <div className='col-12 header-NewProducts'>
                    <h2>
                        New Shoes Arrival
                    </h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>
                </div>
            </div>
        </div>
        )}
    return(
        <section className='NewProducts'>
        {HeaderNewProduct()}
        <div className='container'>
            <div className='row'>
                {
                    Products.map((product, i)=>{
                        return(
                        <div className='col-sm-12 col-md-6 col-lg-3'key={i}>
                            <ProductCardPresentation item={product} />
                        </div>
                    )})
                
               }
            
            </div>
        </div>
        </section>
    )
}
export default NewProducts;