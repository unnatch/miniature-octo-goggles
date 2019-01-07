import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, Button, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Row } from 'reactstrap';

export default class PickUpPointModal extends React.Component {
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
      <Button color="secondary" onClick={this.toggle}>{this.props.location}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.location}</ModalHeader>
        <ModalBody>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleLocation}>
            <DropdownToggle caret>
              {this.props.location}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.toggleCollapse}>Sai Kung</DropdownItem>
              <DropdownItem onClick={this.toggleCollapse}>Sha Tin</DropdownItem>
              <DropdownItem onClick={this.toggleCollapse}>Tai Po</DropdownItem>
              <DropdownItem onClick={this.toggleCollapse}>Tsuen Wan</DropdownItem>
              <DropdownItem onClick={this.toggleCollapse}>Tuen Mun</DropdownItem>
              <DropdownItem onClick={this.toggleCollapse}>Yuen Long</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Collapse isOpen={this.state.collapse}>
          <div className="my-2">
            <Row><Button color="link">1-9 Yen Chow Street</Button></Row>
            <Row><Button color="link">Goobne Chicken Sha Tin Centre</Button></Row>
          </div>
          </Collapse>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}