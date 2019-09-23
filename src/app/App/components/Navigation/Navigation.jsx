import React,{useRef, useEffect, useState} from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation=()=>{
    const clickShow = useRef(null);
    const navRef = useRef(null);
    let checkShow = false;

    const _onShowNav=()=>{
        if(window.scrollY >= 600 ){
            checkShow=true;
            navRef.current.className = 'Navigation navbar navbar-expand-lg navbar-light showNav';
        }
        else if(window.scrollY <= 600 && checkShow==true){
            checkShow=false;
            navRef.current.className = 'Navigation navbar navbar-expand-lg navbar-light hiddenNav';
        }
        else if(window.scrollY <= 200 ){
            navRef.current.className = 'Navigation navbar navbar-expand-lg navbar-light';
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',_onShowNav);
        return (()=>{  
            window.addEventListener('scroll',_onShowNav);
        });
      }, []);

    return(
    <nav className="Navigation navbar navbar-expand-lg navbar-light " ref={navRef}>
        <div className='container'>
            <Link to='/###' className="navbar-brand" href="#">ThinhVN</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>   
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                
            <li className="nav-item">
                <Link to='/###' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
                <Link to='/###' className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                onMouseOver={()=>{
                    clickShow.current.className +=' show'
                }}
                onMouseOut={()=>{
                    clickShow.current.className =' dropdown-menu'
                }}
                >
                    catalog
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" ref={clickShow}
                onMouseOver={()=>{
                    clickShow.current.className +=' show'
                }}
                onMouseOut={()=>{
                    clickShow.current.className =' dropdown-menu'
                }}
                >
                <Link to='/' className="dropdown-item" href="#">shop</Link>
                <Link to='/##2' className="dropdown-item" href="#">Signle product</Link>
                <Link to='/##3' className="dropdown-item" href="#">Cart</Link>
                <Link to='/##4' className="dropdown-item" href="#">Check Out</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link to='/###' className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
                <Link to='/###' className="nav-link" href="#">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to='/###' className="nav-link" href="#">Contact</Link>
            </li>
            <li className="nav-item active-item">
                <Link to='/###' className="nav-link" href="#">
                <i className="fa fa-shopping-cart"></i> [0]
                </Link>
            </li>
            
            </ul>
        </div>
        </div>
    </nav>
    ) 
}
export default Navigation;