import React from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';

interface MessageProps {
  name: string;
  children?: JSX.Element;
}

export default ({ name, children }: MessageProps) => (
  <p className={styles.container}>
    Say hello to <Link to="/about/zach">{name}</Link>
    {children}
  </p>
);
