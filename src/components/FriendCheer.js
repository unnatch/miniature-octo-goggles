import React from 'react';
import RelatedCard from './RelatedCard.js';

export default class FriendCheer extends React.Component {
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
        <h2 className="col-12 my-4 py-1 border-bottom">FRIENDS ALSO CHEERS</h2>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <RelatedCard brand="Hollister" productTitle="Glittery Triangle Bikini Set" productPriceAfter="HK$ 3700" productPriceBefore="HK$ 3900" productIMG="product-page-img-10.png" />
          <RelatedCard brand="Hollister" productTitle="Glittery Triangle Bikini Set" productPriceAfter="HK$ 3700" productPriceBefore="HK$ 3900" productIMG="product-page-img-11.png" />
          <RelatedCard brand="Hollister" productTitle="Glittery Triangle Bikini Set" productPriceAfter="HK$ 3700" productPriceBefore="HK$ 3900" productIMG="product-page-img-12.png" />
          <RelatedCard brand="Hollister" productTitle="Glittery Triangle Bikini Set" productPriceAfter="HK$ 3700" productPriceBefore="HK$ 3900" productIMG="product-page-img-9.png" />
        </div>
      </div>
    );
  }
}