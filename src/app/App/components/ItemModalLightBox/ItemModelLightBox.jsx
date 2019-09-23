import React, {useRef} from 'react';
import './ItemModalLightBox.css';
import PropTypes from 'prop-types';

const ItemModalLightBox=({img, index, nextClick, closeModal, closeModelAni})=>{
    const check= useRef(null);
    const _closeModal=()=>{
        check.current.className +=' closeModal';
        closeModal();
    }
    return(
    <>
    <div className= {closeModelAni} ref={check}>
        <img src={img} onClick={nextClick}/>
        <div className="numbertext" style={{width:'100%'}}>{index + ' of 6'}</div>
        <div className='areaClose ' onClick={_closeModal} ></div>
    </div>
    </>)
}

ItemModalLightBox.propTypes={
    img: PropTypes.string.isRequired, 
    index: PropTypes.number.isRequired,
    nextClick: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    closeModelAni: PropTypes.string.isRequired
};
export default ItemModalLightBox;