import React  from 'react';
import logo from './logo.svg';
import './Header.scss';

function Header(){
    return(
        <div className="nav">
            <span className="nav-brand">
                <h1>Title</h1>
                <img src={logo}alt=""/>
            </span>
            <span className="nav-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Product</a>
            <a href="">Contact</a>
            </span>
        </div>
    )
}

export default Header;
