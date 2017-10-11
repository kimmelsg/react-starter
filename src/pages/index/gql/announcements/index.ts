import all from './all.gql';
import { graphql } from 'react-apollo';
import { QueryProps } from 'react-apollo';
import { announcementsQuery } from 'schema';

type Props = {
  name: string;
};

type WrappedProps = Props & QueryProps;

export default graphql<announcementsQuery, WrappedProps>(all);
