import React from 'react';
import './index.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="#">Sadegh</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" dir="rtl">
          <ul className="navbar-nav nav-pills" >
            <li className="nav-item ">
              <a className="nav-link" href="#add">اضافه کردن <i className="fa fa-plus mx-2"></i></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#list">لیست <i className="fa-address-card mx-2"></i></a>
            </li>
       
          </ul>
        </div>
        </nav>
    )
}

export default Navbar;
