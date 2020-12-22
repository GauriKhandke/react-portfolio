import React from 'react';
import '../../assets/css/script.css';

export default function Skills() {
  return (
    <>
    <section className="skill-container">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="row text-center">

                    <div className="col">
                        <div>
                            <i className="fab fa-html5 fa-3x" style= {{color: '#FF7F50'}}></i>
                            <p>HTML5</p>
                        </div>
                    </div>

                    <div className="col">
                        <div >
                            <i className="fab fa-css3-alt fa-3x" style= {{color: '#1E90FF'}} ></i>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-js-square fa-3x" style= {{color: '#DAA520'}}></i>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-node fa-3x" style= {{color: '#9ACD32'}}></i>
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-react fa-3x" style= {{color: '#00CED1'}}></i>
                            <p>React</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fas fa-database fa-3x" style= {{color: '#00758F'}}></i>
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fas fa-leaf fa-3x" style= {{color: '#4DB33D'}}></i>
                            <p>MongoDB</p>
                        </div>
                    </div>
                    

                    <div className="col">
                        <div >
                            <i className="fab fa-github fa-3x"></i>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <br />
    </>
  )
}
