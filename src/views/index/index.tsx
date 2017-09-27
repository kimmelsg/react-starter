import React from 'react';
import { Link } from 'react-router-dom';

interface HelloProps {
  name: string;
}

export default class Hello extends React.Component<HelloProps> {
  render() {
    return (
      <h1>
        Say hello to <Link to="/about/zach">{this.props.name}</Link>
      </h1>
    );
  }
}
