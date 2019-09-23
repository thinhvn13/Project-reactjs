import React,{useRef} from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard=({item})=>{
    const show_btn=useRef(null);
    const show_bg=useRef(null);
    const zoom_img=useRef(null);

    const _onMouseHover=()=>{
        show_btn.current.style.visibility='visible';
        show_btn.current.style.transform='translateY(-10px)'
        show_btn.current.style.transitionDuration='0.2s';
        
        show_bg.current.style.visibility='visible';
        zoom_img.current.style.transform='scale(1.2)';
        zoom_img.current.style.transitionDuration='0.2s';
        
    }
    const _onMouseOut=()=>{
        show_btn.current.style.transform='translateY(10px)'
        show_btn.current.style.transitionDuration='0.1s';
        show_btn.current.style.visibility='hidden';
        show_bg.current.style.visibility='hidden';
        zoom_img.current.style.transform='scale(1)';
        zoom_img.current.style.transitionDuration='0.2s';
    }
    return(
        <div className='product-card'>
            <div className='view-product' 
            onMouseOver={_onMouseHover}
            onMouseOut={_onMouseOut}
            >
            <Link to='/#product' className='img-pro'>
                <img src={item.img_product} ref={zoom_img}>
                </img>
            </Link>
            {item.rate_sale==null? null:<span className='status'> {item.rate_sale}% Off</span>}
            <div className='circle-over' ref={show_bg}></div>
            <p className='btn-area' ref={show_btn}>
                <span className='btn-add-to-cart'>ADD TO CART + &nbsp; </span>
                <span className='btn-buy-now'>BUY NOW &nbsp;  
                <i className='fa fa-shopping-cart fa-1x'> &nbsp;  </i>
                </span>
            </p>
            </div>
            <div className='ifo-pro'>
                <div className='area-rating'>
                    <div className='cat'>
                        <p>LIFESTYLE</p>
                    </div>
                    <div className='rating'>
                        {[...Array(item.star).keys()].map(
                            (star,i)=>{
                                return(
                                <i className="fa fa-star fa-1x checked" key={i}></i>
                                )
                            }
                        ) }
                        {[...Array(5-item.star).keys()].map(
                            (star,i)=>{
                                return(
                                <i className="fa fa-star fa-1x" key={i}></i>
                                )
                            }
                        ) }
                    </div>
                </div>
                <h3 className='name-product'><Link to='/##'>{item.name_product}</Link></h3>
                <div className='pracing'>
                    <p className='price'>
                        <span className='old-price'>
                           {item.rate_sale==null? '':item.price_old}
                        </span>
                        <span className='sale-price'>
                            {item.rate_sale==null? item.price_old:item.price_sale}
                        </span>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard;