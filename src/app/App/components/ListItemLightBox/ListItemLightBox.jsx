import React, {useState, useEffect} from 'react';
import './ListItemLightBox.css';
import { ItemLightBoxPresentation } from '../ItemLightBox';
import { ModalLightBoxPresentation } from './../ModalLightBox/index';
import Asset from './../../asset/Asset';
import PropTypes from 'prop-types';

const ListItemLightBox=({fake_gallerys})=>{
    const [show, setShow] = useState(null);

    const closeModal=()=>{
        setTimeout(()=>{ //Start the timer
            setShow(null) //After 1 second, set render to true
        }, 1000)
    }
    const _onHiddenScroll=()=>{
        if(show!= null){

            console.log(show);
            document.body.style.overflowY = 'hidden';
        }
        else{

            document.body.style.overflowY = 'visible';
        }
    }
    useEffect(
        ()=>{
            _onHiddenScroll();
            return ()=>{
                
            }
        },
        [show]
    )
    return(
        <div className="row clearScroll">
            {
                fake_gallerys.map((images, i)=>{
                    return(
                    <div className='col-md-2 clear-col enable-animation item-gallery' key={i} 
                    onClick={()=>{
                        setShow(i)
                    }}
                    >
                        <ItemLightBoxPresentation image={images.image}/>
                    </div>
                    )
                })
            } 
            {
            show != null ? 
            <ModalLightBoxPresentation data={Asset.listItemModal} j={show} 
            closeClick={closeModal} closeModal=''/>:null
            }
        </div>
    )
}

ListItemLightBox.propTypes={
    fake_gallerys: PropTypes.array.isRequired, 
};
export default ListItemLightBox;