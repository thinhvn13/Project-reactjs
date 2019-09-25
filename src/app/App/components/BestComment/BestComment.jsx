import React, {useState,useRef, useEffect, useCallback} from 'react';
import './BestComment.css';

import { CommentCardPresentation } from '../CommentCard';

const BestComment=({comments})=>{
    let originalX=0;
    let cordinateSlide=0;
    let cordinateStep=0;
    let moveX=0;
    let currentWitdh=document.documentElement.clientWidth;
    let numberComments = [...Array(comments.length).keys()]
    const tempdata = [...comments];
    if(tempdata.length < comments.length+2){
        tempdata.push(comments[0]);
        tempdata.unshift(comments[4]);
    }
    const [IndexComment, setIndexComment] = useState(0);
    const checkWidth = useRef(null);

    const _listenDiv =()=>{
        if(currentWitdh==0){
            currentWitdh=document.documentElement.clientWidth;
        }
        if(currentWitdh!=document.documentElement.clientWidth){
        currentWitdh=document.documentElement.clientWidth;
        let cordinate = (checkWidth.current.offsetWidth +30)*(IndexComment);
        checkWidth.current.style.transitionDuration='0s';
        checkWidth.current.style.transform= 'translate(-'+cordinate.toString()+'px)';
        }
    }
    const _onClickChoose=(n)=>{     
        // console.log(n)
        if(n==0 & IndexComment==4){
            checkWidth.current.style.transitionDuration='0.3s';
            let cordinate = (checkWidth.current.offsetWidth +30)*(4+1);
            checkWidth.current.style.transform= 'translate(-'+cordinate.toString()+'px)';
            
            setTimeout(() => {
                checkWidth.current.style.transitionDuration='0s';
                cordinate = (checkWidth.current.offsetWidth + 30)*0;
                checkWidth.current.style.transform= 'translate('+cordinate.toString()+'px)';
              }, 300);
            setIndexComment(n);
        }
        else if(n==4 & IndexComment==0){
            checkWidth.current.style.transitionDuration='0.3s';
            let cordinate = (checkWidth.current.offsetWidth +30);
            checkWidth.current.style.transform= 'translate('+cordinate.toString()+'px)';
            setTimeout(() => {
                checkWidth.current.style.transitionDuration='0s';
                let cordinate = (checkWidth.current.offsetWidth +30)*4;
                checkWidth.current.style.transform= 'translate(-'+cordinate.toString()+'px)';
              }, 300);
            setIndexComment(n);
        }
        else{
        let cordinate = (checkWidth.current.offsetWidth +30)*(n);
        setIndexComment(n);
        checkWidth.current.style.transitionDuration='0.3s';
        checkWidth.current.style.transform= 'translate(-'+cordinate.toString()+'px)';
        }
        checkWidth.current.style.transitionDuration='0.3s';

    } 
    const _eventMove=(e)=>{
        if(IndexComment!=0){
            cordinateSlide = cordinateStep*IndexComment;
            moveX= (originalX- e.pageX)+cordinateSlide;
            checkWidth.current.style.transform= 'translate(-'+(moveX).toString()+'px)';
        }else{

            cordinateSlide = cordinateStep*IndexComment;
            moveX= -(originalX- e.pageX)-cordinateSlide;
            checkWidth.current.style.transform= 'translate('+(moveX).toString()+'px)';
            moveX = -moveX;
        }
    }
    const _eventUp=()=>{
        let temp = moveX-cordinateSlide
        originalX=0;
        moveX=0;
        cordinateStep=0;
        cordinateSlide=0;
        if(temp > 0){
            if(IndexComment+1>4){
                _onClickChoose(0);
            }
            else 
            {
                _onClickChoose(IndexComment+1);}
        }
        else if(temp < 0){
            if(IndexComment-1<0){
                _onClickChoose(4);
            }
            else _onClickChoose(IndexComment-1);
        }
        else _onClickChoose(IndexComment);
    }

    useEffect(() => {
        window.addEventListener('resize',_listenDiv, false);
        return (()=>{  
            window.removeEventListener('resize',_listenDiv, false);
            window.removeEventListener('mousemove',_eventMove, false);
            window.removeEventListener('mouseup',_eventUp, false);})
      }, [IndexComment]);

    return(
        <>
        <div className='heading-section' >
            <h2>Our satisfied customer says</h2>
            <p className=''>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>

        <div className='Parent'>
        <div className='CommentCard' ref={checkWidth} style={{width:'100%'}}
        onMouseDown={(e)=>{
            if(originalX==0){
                originalX=e.screenX;
            }
            if (cordinateStep==0){
                cordinateStep=(checkWidth.current.offsetWidth +30);
            }
            window.addEventListener('mouseup',_eventUp, false); 
            window.addEventListener('mousemove',_eventMove, false);
        }}
        >
            { 
                tempdata.map((item, i)=>{
                    let clsComment =''
                    if(i==IndexComment+1){
                        // console.log(checkWidth.current.offsetWidth)
                        clsComment +=' active-comment col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12'
                    }
                    else
                    {
                        clsComment +=' hidden-comment col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12'
                    }
                    return(
                        <div className={clsComment} key={i}>
                        <CommentCardPresentation
                            image={item.avatar-1}
                            comment={item.comment}
                            name={item.name}
                            position={item.position}
                            key={i}
                            />
                        </div>    
                    )
                })
            }
           </div>
           </div>  
        <div className='btn-dots'>
           {
               numberComments.map((index, i)=>{
                //    {console.log(index)}
                   if (index==IndexComment){
                       return(
                        <button className='btn-dot btn-active' onClick={()=>{
                            _onClickChoose(i)
                        }} key={i}></button>
                       )
                    }
                   else{
                       return(
                        <button className='btn-dot' onClick={()=>{_onClickChoose(i)}} key={i}></button>
                    )
                }
               })
           }
        </div>
    </>
    )
}

export default BestComment;