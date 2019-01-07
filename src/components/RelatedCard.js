import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };
  }
  render() {
    return (
      <div className="productCard">
        <Card>
          <CardImg top width="100%" src={this.props.productIMG} alt="Card image cap" />
          <CardBody>
            <CardTitle className="d-flex flex-row align-items-center">
              <span className="font-weight-bold"> {this.props.brand} </span>
            </CardTitle>
            <CardSubtitle> {this.props.productTitle} </CardSubtitle>
            <CardText className="my-2"> <span className="currentPrice"> {this.props.productPriceAfter} </span> <del className="beforePrice"> {this.props.productPriceBefore} </del></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}