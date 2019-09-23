import React, {useState, useRef, useEffect} from 'react';
import { ItemModalLightBoxPresentation } from './../ItemModalLightBox/index';
import PropTypes from 'prop-types';
import './ModalLightBox.css';

const ModalLightBox=({data, j, closeClick})=>{
    const [chooseImg, setChooseImg]=useState(j);
    const [closeModelAni, setcloseModelAni]=useState('ItemModal');
    
    const _prevClick =()=>{
        if(chooseImg-1 < 0){
            setChooseImg(5)
        }else{
            setChooseImg(chooseImg-1)
        }
    }
    const _nextClick =()=>{
        if(chooseImg+1 > 5){
            setChooseImg(0)
        }else{
            setChooseImg(chooseImg+1)
        }
    }
    const _closeClick=()=>{
        setcloseModelAni('ItemModal closeModal');
        closeClick();
    }
    return(
    <div id="Ftc-Modal">
        <span onClick={_closeClick} className='closeModalButton'>&times;</span>
            <ItemModalLightBoxPresentation img={data[chooseImg].image} index={chooseImg+1} 
            nextClick={_nextClick}
            closeModal={closeClick}
            closeModelAni={closeModelAni}
            />
            <a className="prev" onClick={_prevClick} href='#'>❮</a>
            <a className="next" onClick={_nextClick} href='#'>❯</a>
        </div>
    )
}

ModalLightBox.propTypes={
    data: PropTypes.array.isRequired, 
    j: PropTypes.number.isRequired,
    closeClick: PropTypes.func.isRequired,
};
export default ModalLightBox;