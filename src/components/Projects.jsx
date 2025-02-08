import React from 'react'
import { Col, Container, Row,Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import mernstack1 from '../assets/img/p5.jpg'
import mernstack2 from '../assets/img/p2.jpg'
import mernstack3 from '../assets/img/p3.jpg'
import mernstack4 from '../assets/img/p4.jpg'
import ProjectsCard from './ProjectsCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
const Projects = () => {
  const projects = [
    {
      title: "Frontend Developer",
      imgUrl: mernstack1,
    },
    {
      title: "Frontend Developer",
      imgUrl: mernstack2,
    },
    {
      title: "Frontend Developer",
      imgUrl: mernstack3,
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Past Events</h2>
            <Tab.Container id='projects-tab' defaultActiveKey="first">
            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey="first">Event-1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project,index)=>{
                      return(
                        <ProjectsCard key={index}{...project}/>
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
              <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}

export default Projects