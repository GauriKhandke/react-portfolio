import React from 'react';

export default function Nav() {
    return (
        <>
          <div id = "home" >
            <div className="container-fluid nav-color">
                <nav>
                  <ul className="navbar nav justify-content-start fixed-top navbar-dark nav-color">
                    <li className="nav-item">
                      <a className="nav-link" style={{ fontSize: '25px', color:'white', fontWeight:'bold' }} href="#home">
                        Gauri Khandke
                      </a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link" href="#about" style={{ fontSize: '20px',color: 'white'}}>
                        About
                      </a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link" href="#portfolio" style={{ fontSize: '20px',color: 'white'}}>
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