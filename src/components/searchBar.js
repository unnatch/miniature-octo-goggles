import React from 'react';
import { InputGroup, InputGroupAddon, Input , Badge } from 'reactstrap';

export default class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  render() {
    return (
      <div>
	      <InputGroup className="mb-2">
	        <InputGroupAddon addonType="prepend">L</InputGroupAddon>
		        <Input placeholder="Discover......" />
		        <Badge color="secondary" className="mx-1 d-flex flex-column justify-content-center" pill>Beats</Badge>
		        <Badge color="secondary" className="mx-1 d-flex flex-column justify-content-center" pill>Nike</Badge>
		        <Badge color="secondary" className="mx-1 d-flex flex-column justify-content-center" pill>Superdry</Badge>
		    </InputGroup>
      		<div className="col-12 d-flex">
      		<span className="mx-auto mb-2">
      		Whats trending today:
      		<a className="mx-1" href="">Nike</a>
      		<a className="mx-1" href="">Superdry</a>
      		<a className="mx-1" href="">Adidas</a>
      		<a className="mx-1" href="">Apple</a>
      		<a className="mx-1" href="">KikoMilano</a>
      		<a className="mx-1" href="">Innisfree</a>
      		</span>
      		</div>


      </div>
    );
  }
}