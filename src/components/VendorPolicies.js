import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class CompanyPolicies extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="col-6 float-left mt-5">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            Vendor
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Suggestions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="my-2"> 
              <Col sm="12">
                <img className="rounded-circle vendorImage mr-2" src="product-page-img-8.png" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="my-2"> 
              <Col sm="12">
                <h4>Suggestions</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}