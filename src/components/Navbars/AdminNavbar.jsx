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
import { Link } from "react-router-dom";
// reactstrap components
import {Navbar, Container,} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {

    const {logo} = this.props;
    return (
      <>
        <Navbar className="navbar-top navbar-dark mb-2" id="navbar-main">
          <Container fluid>
            <Link
              className="w-50 h3 text-white text-uppercase mt-2 pt-1 d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <div className='w-50' style={{maxWidth: 200}}>
              <Link to={logo.innerLink}  >
                <img alt={logo.imgAlt} src='https://livingsecurity.com/wp-content/themes/living-security/dist/img/logo.svg' className='mw-100'/>
              </Link>
            </div>


          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
