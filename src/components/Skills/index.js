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
                            <p style= {{color: 'white'}}>HTML5</p>
                        </div>
                    </div>

                    <div className="col">
                        <div >
                            <i className="fab fa-css3-alt fa-3x" style= {{color: '#1E90FF'}} ></i>
                            <p style= {{color: 'white'}}>CSS3</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-js-square fa-3x" style= {{color: '#DAA520'}}></i>
                            <p style= {{color: 'white'}}>JavaScript</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-node fa-3x" style= {{color: '#9ACD32'}}></i>
                            <p style= {{color: 'white'}}>NodeJS</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fab fa-react fa-3x" style= {{color: '#00CED1'}}></i>
                            <p style= {{color: 'white'}}>React</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fas fa-database fa-3x" style= {{color: '#00758F'}}></i>
                            <p style= {{color: 'white'}}>MySQL</p>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <i className="fas fa-leaf fa-3x" style= {{color: '#4DB33D'}}></i>
                            <p style= {{color: 'white'}}>MongoDB</p>
                        </div>
                    </div>
                    

                    <div className="col">
                        <div >
                            <i className="fab fa-github fa-3x" style= {{color: 'white'}}></i>
                            <p style= {{color: 'white'}}>GitHub</p>
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
