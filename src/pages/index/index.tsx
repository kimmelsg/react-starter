import React from 'react';
import Message from 'shared/message';
import styles from './style.scss';
import { Link } from 'react-router-dom';
import announcements from './gql/announcements';

export default announcements(props => {
  if (props.data && props.data.announcements) {
    console.log(props.data.announcements[0]!.title);
  }
  return (
    <div>
      <div className={styles.div}>
        <p>Amazing</p>
      </div>
      <Message name={props.name}>
        <Link to="/test" />
      </Message>
    </div>
  );
});
