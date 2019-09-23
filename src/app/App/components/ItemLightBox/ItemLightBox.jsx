import React, {useRef} from 'react';
import './ItemLightBox.css';

const ItemLightBox =({image})=>{
    const showIcon = useRef(null);
    return(
        <div style={{backgroundImage:`url(${image})`}} align='center' className='hover-shadow'
            onMouseMove={()=>{
                showIcon.current.className='fa fa-instagram fa-1x show-ic';
                // showIcon.current.style.visibility='visible';
            }}
            onMouseOut={()=>{
                showIcon.current.className ='fa fa-instagram fa-1x hidden-ic';
                // showIcon.current.style.visibility='hidden';
            }}
        >
            <i className='fa fa-instagram fa-1x' ref={showIcon}></i>
        </div>
    )
};

export default ItemLightBox;