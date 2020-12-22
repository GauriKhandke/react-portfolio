import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProjectList from '../../components/ProjectList';
import { projects } from '../../Data.js';

import '../../assets/css/script.css';

export default function Portfolio() {
  
  return (
    <>  
      <section id="portfolio">
				<br/>
        <br/>
        <br />
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="heading"><strong>Projects</strong></h2>
            </Col>  
          </Row>
          <hr className="line" />
          <br />
          <Row>
            {projects.map((project) => (
              <ProjectList key={project.id} project={project} />
            ))}
          </Row>
        </Container>
        <br />
        <br /> 
      </section>    
      </>
 );
}