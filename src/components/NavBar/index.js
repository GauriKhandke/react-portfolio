import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
          <div id = "home" >
            <div className="container-fluid" >
                <nav>
                  <ul className="navbar nav justify-content-start">
                    <li className="nav-item">
                      <a className="nav-link" style={{ fontSize: '25px', color:'black', fontWeight:'bold' }} href="#home">
                        Gauri Khandke
                      </a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link" href="#about" style={{ fontSize: '20px',color: 'black'}}>
                        About
                      </a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link" href="#portfolio" style={{ fontSize: '20px',color: 'black'}}>
                        Portfolio
                      </a>
                    </li>
                </ul>
              </nav>
          </div>
        </div>
      </>
    )
}