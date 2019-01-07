import React from 'react';
import ReviewCard from './ReviewCard.js';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };
  }
  render() {
    return (
      <div className="col-12 d-flex flex-row align-items-center flex-wrap">
        <h2 className="text-center col-12 mb-4">REVIEWS</h2>
        <ReviewCard name="Oscar" color="Red" size="M" image="product-page-img-7.png" />
        <ReviewCard name="Raymond" color="Red" size="S" image="product-page-img-6.png" />
        <ReviewCard name="Alan" color="Yellow" size="L" image="product-page-img-7.png"/>
      </div>
    );
  }
}