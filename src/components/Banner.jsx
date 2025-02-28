import {useState,useEffect} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import webdevelopment from '../assets/img/web-development.png';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = [
      "DEVELOPER SUMMIT 2.0",
      "WELCOME CODERS!",
      "INNOVATE. CODE. CONNECT.",
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker); }; // Corrected here
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome To Developers Summit 2.0</span>
              <h1>
                <span className="wrap">{text}</span>
              </h1>
              <p>
                We are Google Developer Groups on Campus (GDG OC), a vibrant
                community dedicated to fostering innovation, collaboration, and
                tech skill enhancement. Our mission is to empower students to
                grow as developers, creators, and future leaders in the tech
                industry.
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={webdevelopment} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    );
};
