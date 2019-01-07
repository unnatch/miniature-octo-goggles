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
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Delivery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            Return & Refund
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="my-2"> 
              <Col sm="12">
                <div>Origin</div>
                <div>Inventory</div>
                <div>Suitable for</div>
                <div>Matches with: </div> 
                <div>Tags</div>     
                <div className="mt-5">
                H&M's business concept is to offer fashion and quality at the best price. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies. The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.
                </div>          
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="my-2"> 
              <Col sm="12">
                <div>All orders are subject to product availability. If an item is not in stock at the time you place your order, we will notify you and refund you the total amount of your order, using the original method of payment. </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="my-2"> 
              <Col sm="12">
                <div>If you are not 100% satisfied with your purchase, you can return the product and get a full refund or exchange the product for another one, be it similar or not.

You can return a product for up to 30 days from the date you purchased it.

Any product you return must be in the same condition you received it and in the original packaging. Please keep the receipt.</div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}