import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">React SPA Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                    <NavLink to='/' >Home</NavLink>
                </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavLink to='/about'>About</NavLink>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/contact'>Contact</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>




    );
}

export { Navigation };
