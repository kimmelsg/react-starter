import React from 'react';
import { RouteComponentProps, match } from 'react-router-dom';

interface AboutParams {
  name: string;
}

interface AboutProps extends RouteComponentProps<any> {
  match: match<AboutParams>;
}

export default ({ match }: AboutProps) => <div>hi, {match.params.name}</div>;
