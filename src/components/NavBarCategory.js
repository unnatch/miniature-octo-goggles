import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class NavBarCategory extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  render() {
    return (
      <ButtonGroup className="col-12 mt-5">
        <Button className="col-3 btn-light">Beauty & Health</Button>
        <Button className="col-3 btn-light">Food & Beverage</Button>
        <Button className="col-3 btn-light">Accessories</Button>
        <Button className="col-3 btn-light">Handmade</Button>
      </ButtonGroup>
    );
  }
}