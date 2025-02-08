import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Row, Col, Container,Button } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
                <h2>Events</h2>
                <p>
                  The "Developer Summit 2.0" is an annual event featuring
                  workshops, keynotes, panel discussions, coding competitions,
                  and networking opportunities. The summit culminates in an
                  exciting hackathon challenge, fostering creativity and
                  problem-solving.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>TechSynopsis</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>ReIncarnate</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Bug Bounty</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Web Hunt</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Escape Room</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Data Crunch</h5>
                    <Button variant="primary">Explore</Button>
                  </div>
                </Carousel>

            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
      </section>
    );
}

export default Skills