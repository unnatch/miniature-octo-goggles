import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Location extends React.Component {
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
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Fashion</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Women</a></BreadcrumbItem>
          <BreadcrumbItem active>Bikini</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}