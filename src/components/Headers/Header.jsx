/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


class Header extends React.Component {

  dt = new Date().toLocaleString();

  render() {

    return (
      <>
        <div className="header bg-gradient-living pb-7 pt-7 pt-md-7">
          <Container fluid>
          <h3 className='text-white-50'>Scan Time: {this.dt}</h3>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="4" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h3"
                            className="text-uppercase text-muted mb-0"
                          >
                            Critical Vulnerability
                          </CardTitle>
                          <span className="h1 font-weight-bold mb-0">
                            1
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-exclamation" />
                          </div>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h3"
                            className="text-uppercase text-muted mb-0"
                          >
                            Moderate Vulnerabilities
                          </CardTitle>
                          <span className="h1 font-weight-bold mb-0">2</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-exclamation-circle" />
                          </div>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h3"
                            className="text-uppercase text-muted mb-0"
                          >
                            Low Vulnerability
                          </CardTitle>
                          <span className="h1 font-weight-bold mb-0">
                            1
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-exclamation-triangle" />
                          </div>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
