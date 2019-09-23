import React,{useState, useEffect, useRef} from 'react';
import './CarouselBanner.css'
import { Link } from 'react-router-dom';
import { data_bg } from './fake_data';

const ItemCarousel=({item})=>(
    <div className='container ItemCarousel'>
        <div className='ItemCarousel-img' >
            <img src={item.image}></img>
        </div>
        <div className='ItemCarousel-content'>
            <span>#New Arrival</span>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <p className='ItemCarousel-Btn'><Link to='/t'>Discover Now</Link></p>
        </div>
    </div>

)
const _cloneData=(data)=>{
    let data_clone=[];
    if (data_clone.length!=data.length){
        data_clone = [...data];
        data_clone.push(data[0])
        data_clone.unshift(data[data.length-1])
    }
    return data_clone;
}
const CarouselBanner=()=>{
    let temp_data =_cloneData(data_bg);
    const [chooseImg, setChooseImg] = useState(0);
    const Carousel = useRef(null);
    const showAni = useRef(null);
    // calculate move muouse
    let poiterStartX = 0;
    let poiterEndX = 0;
    let ValueMove = 0;
    let cordinatePresent=0;
    let sumItem = data_bg.length;
    let processClick = false;

    const _onChageSlide=(i)=>{
        console.log(chooseImg);
        let move = (i+1)*(Carousel.current.offsetWidth/4);
        Carousel.current.style.transitionDuration='0.3s';
        Carousel.current.style.transform='translate('+(-move).toString()+'px)';
        if(i==sumItem){
            setTimeout(() => {
                Carousel.current.style.transitionDuration='0s';
                Carousel.current.style.transform='translate('+(-Carousel.current.offsetWidth/4).toString()+'px)';
            }, 300);
            setChooseImg(0);
        }
        else if(i==-1){
            setTimeout(() => {
                Carousel.current.style.transitionDuration='0s';
                Carousel.current.style.transform='translate('+(-2*(Carousel.current.offsetWidth/4)).toString()+'px)';
            }, 300);
            setChooseImg(sumItem-1)
        }else{
            setChooseImg(i);
        }
    }

    const _reset=()=>{
        poiterStartX = 0;
        poiterEndX = 0;
        ValueMove = 0;
        cordinatePresent=0;
        processClick = false;
    }

    const _onMoveMouse=(e)=>{
        if(cordinatePresent==0){
            cordinatePresent= (chooseImg+1)*(Carousel.current.offsetWidth/4);
        }
        poiterEndX=e.pageX;
        ValueMove= (poiterEndX - poiterStartX);
        Carousel.current.style.transform='translate('+(ValueMove-cordinatePresent).toString()+'px)';
    }

    const _onUpMouse=()=>{
        if(ValueMove<0){
            _onChageSlide(chooseImg+1);
            
        }
        else{
            _onChageSlide(chooseImg-1);
        }
        _reset();
        window.removeEventListener('mousemove',_onMoveMouse, false);
    }
    // calculate move muouse
    
    const _onAutoChageItem = setTimeout(() => {
                if(chooseImg==0 && processClick==false ){
                    setChooseImg(1);
                    Carousel.current.style.transitionDuration='0s';
                    Carousel.current.style.transform='translate('+(-2*(Carousel.current.offsetWidth/4)).toString()+'px)';
                    showAni.current.className +=' runani';
                }else{
                    if(processClick==false ){
                    setChooseImg(0);
                    Carousel.current.style.transitionDuration='0s';
                    Carousel.current.style.transform='translate('+(-Carousel.current.offsetWidth/4).toString()+'px)';
                    showAni.current.className +=' runani';
                }
                }
            }, 5000);
    
    useEffect(() => {
        _onAutoChageItem;
        // window.addEventListener('resize',_listenDiv, false);
        return (()=>{  
            // window.removeEventListener('resize',_listenDiv, false);
            window.removeEventListener('mousemove',_onMoveMouse, false);
            window.removeEventListener('mouseup',_onUpMouse, false);
        });
      }, [chooseImg]);

    return(
        <section className='CarouselBanner-home'>
            <div className='CarouselBanner-Show'
            onMouseDown={(e)=>{
                clearTimeout(_onAutoChageItem);
                processClick = true;
                if(poiterStartX==0){
                    poiterStartX=e.screenX;
                }
                window.addEventListener('mousemove',_onMoveMouse, false);
                window.addEventListener('mouseup',_onUpMouse, false); 
            }}
           
            >
                <div className='CarouselBanner-Carousel' ref={Carousel}>
                    {temp_data.map((item, i)=>{
                        let temp_cls=''
                        if(i==chooseImg + 1){
                            temp_cls='active-item';
                        }else{
                            temp_cls='hidden-item';
                        }
                        return(
                            <div className={temp_cls} key={i} ref={temp_cls=='active-item'? showAni:null }>
                                <ItemCarousel item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CarouselBanner;