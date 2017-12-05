import React from 'react';
import logo from './logo.png';
export const Header = () => (
    <div className="col-lg-12 header">
        <img className="col-lg-4 logo" src={logo} alt="sapient logo"/>
        <div className="col-lg-2">SAPIENT INDIA CAREERS</div>
        <nav className="col-lg-6">
            <a className="col-lg-2">Why Sapient?</a>
            <a className="col-lg-2">Roles</a>
            <a className="col-lg-2">People Story</a>
            <a className="col-lg-2">Blog</a>
            <a className="col-lg-2">Media</a>
            <a className="col-lg-2">Careers</a>
        </nav>
    </div>
);
