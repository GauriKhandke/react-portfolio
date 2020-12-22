import React from 'react';
import '../../assets/css/script.css';
import resume from '../../assets/GauriKhandkeResume.pdf';

export default function Header() {
  return (
    <>
      <div className= "text-center header-section justify-content-center text-white">
        <h1 className="header-name">I'm Gauri Khandke</h1>
        <p className="header-description">Full Stack Web Developer in Seattle, Washington</p>
        <div className ='container mb-3 mt-4' >
            <a href="https://github.com/GauriKhandke" className="btn tooltip-test icon" title="Github" target="_blank" rel="noopener noreferrer"
                style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gaurikhandke/" className="btn tooltip-test icon" title="linkedin"
                target="_blank" rel="noopener noreferrer" style={{fontSize:25,color:'#E8E8E8',marginRight:10}}><i className="fab fa-linkedin"></i></a>
            <a href="mailto: khandkegauri@gmail.com" className="btn tooltip-test icon" title="Email" target="_blank" rel="noopener noreferrer"
                style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><i className="fas fa-envelope"></i></a>
            <a href= { resume } className="btn tooltip-test icon" title="Resume" target="_blank" rel="noopener noreferrer"
                style={{fontSize:25, color:'#E8E8E8'}}><i className="fas fa-file-pdf"></i></a>
                 
        </div>
        <p className="scrolldown">
          <a href="#about"><i className="fas fa-angle-down"></i></a>
        </p>
      </div>      
    </>
  )
}
