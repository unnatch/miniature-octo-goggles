import React from 'react';
import { Media , Badge, Button , Jumbotron } from 'reactstrap';
import PickUpPointModal from './PickUpPointModal.js';
import JoinProductModal from './JoinProductModal.js';
import CheersModal from './CheersModal.js';
import GroupCheersModal from './GroupCheersModal.js';

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };
  }
  render() {
    return (
      <Media className="col-12 border-bottom mb-2">
        <Media left href="#" className="col-5">
          <Media object src="product-page-img.png" alt="Generic placeholder image" className="col-12"/>
          <Media object src="product-page-img.png" alt="Generic placeholder image" className="col-3 my-2"/>
          <Media object src="product-page-img-2.png" alt="Generic placeholder image" className="col-3 my-2"/>
          <Media object src="product-page-img-3.png" alt="Generic placeholder image" className="col-3 my-2"/>
          <Media object src="product-page-img-4.png" alt="Generic placeholder image" className="col-3 my-2"/>
          <div className="col-12 border-bottom clearfix">
            <h6 className="status m-2">Coupon</h6>
          </div>
          <div className="col-12 my-2 d-flex">
            <div className="col-6 float-left d-flex flex-row align-items-center">
              <div className="">
                <img/>
                <span className = "mr-3">$5 discount coupon</span>
              </div>
            </div>
            <div className="col-6 float-left d-flex flex-row align-items-center justify-content-end">
              <div className="text-right">
              <Button color="info" className="ml-2">Claim</Button> 
              </div>
            </div>
          </div>
          <div className="col-12 my-2 d-flex">
            <div className="col-6 float-left d-flex flex-row align-items-center">
              <div className="">
                <img/>
                <span className = "mr-3">20% off coupon</span>
              </div>
            </div>
            <div className="col-6 float-left d-flex flex-row align-items-center justify-content-end">
              <div className="text-right">
              <Button color="info" className="ml-2">Claim</Button> 
              </div>
            </div>
          </div>
        </Media>
        <Media body className="col-7">
          <Media heading className="text-center font-weight-bold productBrand">
            Hollister
          </Media>
          <Media heading className="text-center productTitle ">
            Glittery triangle bikini set
          </Media>
          <div className="col-12 border-bottom clearfix">
            <h6 className="float-left status m-2">In Stock</h6>
            <h6 className="float-right m-2">15,000 cheers this</h6>
          </div>
          <div className="col-12 m-1">
            <p className="productDesc">Lined triangle bikini top with removable inserts and ties at the back and back of the neck</p>
          </div>
          <div className="col-12 mx-1 my-2 border-bottom clearfix">
            <p><del>HK$ 3900</del></p>
            <p className="productPrice" >HK$ 3700 <Badge color="success">Save 15%</Badge></p>
          </div>
          <div className="col-12 mx-1 my-2 border-bottom clearfix">
            <p>REBATES - 10% PER INFLUENCE</p>
          </div>
          <div className="col-12 mx-1 my-2 clearfix">
            <h6>SHOP GUARANTEE</h6>
            <p><img src="warning.png" className="guarenteeIcon mr-3"/>Deliver in 3-5 Days</p>
            <p><img src="warning.png" className="guarenteeIcon mr-3"/>100% Authentic</p>
            <p><img src="warning.png" className="guarenteeIcon mr-3"/>14 Days Return</p>
            <p><img src="warning.png" className="guarenteeIcon mr-3"/>Free Shipping</p>
          </div>
          <div className="col-12 clearfix">
            <div className="col-6 float-left">
              <h6> Size: </h6>
              <p>
                <a className="mr-1" href="">XS</a>
                <a className="mx-1" href="">S</a>
                <a className="mx-1" href="">M</a>
                <a className="mx-1" href="">L</a>
                <a className="mx-1" href="">XL</a>
              </p>
            </div>
            <div className="col-6 float-left">
              <h6> Color: </h6>
              <a className="mr-1" href="">Blue</a>
              <a className="mx-1" href="">Red</a>
              <a className="mx-1" href="">Green</a>
            </div>
          </div>
          <div className="col-12 clearfix">
            <Button color="secondary">Size Chart</Button> 
          </div>
          <Jumbotron className="cheers">
            <h3 className="text-center"> Join Group Cheers of 5</h3>
            <h6 className="text-center productTitle py-2 border-bottom"> Please choose pickup point from below</h6>
            <div className="col-12 d-flex flex-row align-items-center justify-content-center">
              <PickUpPointModal location="Hong Kong Island"  className="mx-2">Hong Kong Island</PickUpPointModal> 
              <PickUpPointModal location="Kowloon"  className="mx-2">Kowloon</PickUpPointModal>  
              <PickUpPointModal location="New Territories"  className="mx-2">New Territories</PickUpPointModal>  
            </div> 
            <div className="col-12 my-3 d-flex">
              <div className="col-6 float-left d-flex flex-row align-items-center">
                <img className="rounded-circle profileImage mr-2" src="product-page-img-7.png" />
                <span className = "mr-3">Group 1</span>
                <span className = "hoursLeft">16H 20M 10S</span>
              </div>
              <div className="col-6 float-left d-flex flex-row align-items-center justify-content-end">
                <span className = "mr-3">1/5</span>
                <JoinProductModal className="ml-2">Join</JoinProductModal> 
              </div>
            </div>
            <div className="col-12 my-3 d-flex">
              <div className="col-6 float-left d-flex flex-row align-items-center">
                <img className="rounded-circle profileImage mr-2" src="product-page-img-7.png" />
                <span className = "mr-3">Group 2</span>
                <span className = "hoursLeft">15H 19M 10S</span>
              </div>
              <div className="col-6 float-left d-flex flex-row align-items-center justify-content-end">
                <span className = "mr-3">1/5</span>
                <JoinProductModal className="ml-2">Join</JoinProductModal>
              </div>
            </div>
          </Jumbotron>
          <div className="col-12 my-3 d-flex justify-content-center">
            <CheersModal className="col-6"/> 
            <GroupCheersModal className="col-6"/>  
          </div>
        </Media>
      </Media>
    );
  }
}