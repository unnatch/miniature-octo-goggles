import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class ReviewCard extends React.Component {
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
      <div className="col-4">
        <Card>
          <CardImg top width="100%" src="product-page-img-9.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="d-flex flex-row align-items-center">
              <img className="rounded-circle profileImage" src= {this.props.image} />
              <span className="m-3"> {this.props.name} </span>
            </CardTitle>
            <CardSubtitle>
              <div className="col-12 border-bottom clearfix">
                <h6 className="float-left">Color: {this.props.color} </h6>
                <h6 className="float-right">Size: {this.props.size} </h6>
              </div>
            </CardSubtitle>
            <CardText className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis tempus turpis sit amet convallis. 
            Phasellus non consequat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer elementum, elit quis bibendum ultricies, urna quam placerat ipsum, id vestibulum nisl nisi eu risus. 
            Sed vitae consectetur dolor. Vestibulum vehicula enim non consectetur congue. Duis non sem enim. 
            In interdum lectus est, in pharetra magna auctor eget. Nullam ut suscipit risus, sed tempor leo. 
            In ac eros quis enim dignissim vestibulum. Maecenas eget lacus lacinia, pharetra libero vel, condimentum sem.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}