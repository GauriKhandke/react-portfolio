import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function ProjectList(props) {
  return (
        <>
          <Col lg={4} style={{ padding: '20px',backgroundColor: 'transparent'}}>
            <Card style={{ borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '3px 3px 12px 0 #a9a9a9',textAlign: 'center',}} >
              <Card.Img variant="top" src={props.project.imageUrl} />
              <Card.Body style={{ paddingTop: '0'}}>
                <Card.Title style={{fontSize:'1.3em'}}><strong>{props.project.title}</strong></Card.Title>
                <Card.Text style={{fontSize:'1.2em', textAlign: 'left',color: '#444444',padding: '15px'}}>{props.project.description}</Card.Text>
                <div >
                  <a style={{ minWidth: '60px',margin: '15px 10px 5px',}} href={props.project.appUrl} target="_blank" rel="noopener noreferrer" >
                    <i className='fab fa-chrome' style={{fontSize:'30px'}}></i>
                  </a>
                  <a style={{ minWidth: '60px',margin: '15px 10px 5px',}} href={'https://github.com/' + props.project.id} target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-github' style={{fontSize:'30px'}}></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
      </>
  );
}