import React from 'react';
import Message from 'shared/message';
import styles from './style.scss';
import { Link } from 'react-router-dom';

interface HelloProps {
  name: string;
}

export default class Hello extends React.Component<HelloProps> {
  render() {
    return (
      <div>
        <div className={styles.div}>
          <p>Amazing</p>
        </div>
        <Message name={this.props.name}>
          <Link to="/test" />
        </Message>
      </div>
    );
  }
}
