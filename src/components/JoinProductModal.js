import React from 'react';
import {Form, FormGroup, Label, Input , Button, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Row, Media } from 'reactstrap';

export default class JoinProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false ,
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleLocation() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div className={this.props.className}>
      <Button color="success" onClick={this.toggle}>Join</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Join Group Cheers of 5<div className="col-12 border-bottom"><h6>Goobne Chicken Sha Tin Centre</h6></div></ModalHeader>
        <ModalBody>
          <Media className="col-12 mb-2">
            <Media left href="#" className="col-5">
              <Media object src="product-page-img.png" alt="Generic placeholder image" className="col-12" />
            </Media>
            <Media body className="col-7">
              <Media heading className="font-weight-bold productTitle">
                Hollister - Glittery triangle bikini set
              </Media>
              <div className="col-12 clearfix">
                <div className="col-12 mb-3">
                  <div className="col-12"><span> Size: </span></div>
                    <a className="mr-1" href="">XS</a>
                    <a className="mx-1" href="">S</a>
                    <a className="mx-1" href="">M</a>
                    <a className="mx-1" href="">L</a>
                    <a className="mx-1" href="">XL</a>
                </div>
                <div className="col-12 mb-3">
                  <div className="col-12"><span> Color: </span></div>
                  <a className="mr-1" href="">Blue</a>
                  <a className="mx-1" href="">Red</a>
                  <a className="mx-1" href="">Green</a>
                </div>
                <div className="col-12 mb-3">
                  <div className="col-12"><span> Amount </span></div>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                </div>
              </div>
            </Media>
          </Media>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <span>HK$ 3700 <del>HK$ 3900</del></span>
          <Button color="secondary" onClick={this.toggle}>Join</Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}