import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
export default class TabSection extends Component {
  render() {
    return (
      <>
        <Container className="container-tab sectionwrapper">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Flower Power</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Space</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Xmas</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fem">Numetry</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="six">Co-own</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                      <Image
                        className="tab-img"
                        src="images/flowerpp.png"
                        alt="flower power"
                        fluid
                      />
                    <p>
                      This is an e-commercial project named "Flower Power", made by me in the Wordpress.
                    </p>
                    <a
                      className="button1"
                      href="https://wordpress.y-ferreira.eu/"
                      target="_blank" rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                      <Image
                        className="tab-img"
                        src="images/space.png"
                        alt="space"
                        fluid
                      />
                    <p>
                      That was my project exam in the 2nd semester. I made the 
                      microsite for NASA and Spacex
                    </p>
                    <a
                      className="button1"
                      href="https://exam.y-ferreira.eu/"
                      target="_blank" rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <Image
                        className="tab-img"
                        src="images/xmas.png"
                        alt="xmas"
                        fluid
                      />
                    <p>My 2nd semester project in 2020 the e-commerce site for a Christmas shop, called "Xmas".</p>
                    <a
                      className="button1"
                      href="https://xmas.y-ferreira.eu/"
                      target="_blank" rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                      <Image
                        className="tab-img"
                        src="images/portfolio.png"
                        alt="portfolio"
                        fluid
                      />
                    <p>
                      That was my first portfolio - website, created in the 2nd
                      semester.
                    </p>
                    <a
                      className="button1"
                      href="https://portfolio.y-ferreira.eu/"
                      target="_blank" rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fem">
                      <Image
                        className="tab-img"
                        src="images/numetry.png"
                        alt="numetry"
                        fluid
                      />
                    <p>
                      That was my first semester project in 2019. I made the
                      website called "Numetry" for math curriculum “Eduplaytion”.
                    </p>
                    <a
                      className="button1"
                      href="https://numetry.y-ferreira.eu/"
                      target="_blank" rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="six">
                      <Image
                        className="tab-img"
                        src="images/coown.png"
                        alt="co-own"
                        fluid
                      />
                    <p>This is a design-project for the company "Co- Own", made in Adobe XD </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </>
    );
  }
}
