import React from "react";
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
    Progress

} from "reactstrap";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Doughnut } from "react-chartjs-2";
import Header from "components/Headers/Header.jsx";
import ModalExample from "../components/PDFViewer";
import { chartOptions, parseOptions, scan, } from "variables/charts.jsx";
import scanData from '../data'


class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    scanData,
    loading: true,
    progress: 0,
    scanMessage: 'Scanning Network...',

  };

  startLoader = () => {
    let progress = this.state.progress;

    const interval = setInterval(() => {
      progress += 20;

      this.setState({ progress});

      switch(progress) {

      }

      if (progress >= 100 ) {
        clearInterval(interval);
        this.setState({scanMessage: 'Done!'});
        setTimeout(this.done, 1000);
      } else if (progress === 80) {
        this.setState({scanMessage: 'Gathering results...'});
      } else if (progress === 40) {
        this.setState({scanMessage: 'Checking for vulnerabilities...'});
      }
    }, 2000);

  };

  done = () => {

      this.setState({ loading: !this.state.loading})

  };

  componentWillMount() {

    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }

  }


  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {

      const arrow = document.querySelector('.arrow');

      if (arrow) {
        arrow.animate([
          {left: '0'},
          {left: '10px'},
          {left: '0'}
        ],{
          duration: 700,
          iterations: Infinity
        });
      }
    });
    this.startLoader();
  }

  dt = new Date().toLocaleString();

  render() {
    const { scanData } = this.state;

    return (
        this.state.loading ?
            <div className='w-100 h-100vh d-flex flex-column justify-content-center align-items-center'>
              <h2>{this.state.scanMessage}</h2>
              <div className='w-25'>

                <Progress animated color="info" value={this.state.progress} />
              </div>
            </div>
            :
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>

          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col d-flex justify-content-between align-items-center position-relativeƒ">
                      <h3 className="mb-0">Vulnerabilities</h3>

                       <i className="fas fa-chevron-right arrow fa-2x"/>

                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Severity</th>
                      <th scope="col">Device</th>
                      <th scope="col">Issue Description</th>
                      <th scope="col">IP Address</th>
                      <th scope="col">User Manual</th>
                    </tr>
                  </thead>
                  <tbody>
                  {scanData.map((data, idx) => (
                      <tr key={idx}>
                        <th scope="row">
                          <h2>
                          <span className={
                            `badge p-3 
                            ${data.severity === 'Critical' 
                                ? `badge-danger` 
                                : data.severity === 'Moderate' 
                                    ? `badge-warning` 
                                    : `badge-caution`}`
                          }>
                            {data.severity}
                         </span>
                          </h2>
                        </th>
                        <td>
                          <div className="d-flex justify-content-left align-items-center">
                            <div style={{width: 100}} className='mr-4'>
                              <img className='img-fluid' src={data.imgSrc} alt=""/>
                            </div>
                            <p className='font-weight-bold'>{data.device}</p>
                          </div>
                        </td>
                        <td>{data.issue_description}</td>
                        <td>{data.ip_address}</td>
                        <td>
                          <ModalExample pdf={data.user_manual} buttonLabel='View PDF'/>
                        </td>
                      </tr>
                  ))}

                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="3">
              <Card className="shadow mb-4">
                <CardHeader className="border-bottom">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Scan Details</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <tbody>
                    <tr className=''>
                      <th scope="row"  className='w-50'><h4>IP</h4></th>
                      <td className='text-right'><p>192.168.56.102</p></td>
                    </tr>
                    <tr>
                      <th scope="row"><h4>DNS</h4></th>
                      <td className='text-right'><p>dns.livsec.com</p></td>

                    </tr>
                    <tr>
                      <th scope="row"><h4>Network</h4></th>
                      <td className='text-right'><p>192.168.0.0</p></td>

                    </tr>
                    <tr>
                      <th scope="row"><h4>Start</h4></th>
                      <td className='text-right'><p>{this.dt}</p></td>

                    </tr>
                    <tr>
                      <th scope="row"><h4>Elapsed</h4></th>
                      <td className='text-right'><p>11 seconds</p></td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
                <Card className="bg-white shadow">
                  <CardHeader className="border-bottom">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Vulnerabilities</h3>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div className="chart">
                      <Doughnut
                          data={scan}

                      />
                    </div>
                  </CardBody>
                </Card>

            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Index;



