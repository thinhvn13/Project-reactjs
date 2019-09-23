import React from 'react';
import './Service.css';

const _itemService=({item})=>(
    <>
    <div className='media-service'>
        <i className='fa fa-shopping-bag fa-4x'></i>
    </div>
    <div className='media-content'>
        <h3></h3>
        <p></p>
    </div>
    </>
)
const Service=()=>(
    <section className='Service'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 media-service'>
                    {/* ---Item-Service */}
                        <div className='media-icon'>
                            <i className='fa fa-shopping-bag fa-4x'></i>
                        </div>
                        <div className='media-service-content'>
                        <h3> Free Shipping</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className='col-lg-4 media-service'>
                    {/* ---Item-Service */}
                        <div className='media-icon'>
                            <i className='fa fa-whatsapp fa-4x'></i>
                        </div>
                        <div className='media-service-content'>
                        <h3>Support Customer</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className='col-lg-4 media-service'>
                    {/* ---Item-Service */}
                        <div className='media-icon'>
                            <i className='fa fa-user-secret fa-4x'></i>
                        </div>
                        <div className='media-service-content'>
                        <h3>Secure Payments</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
)
export default Service;