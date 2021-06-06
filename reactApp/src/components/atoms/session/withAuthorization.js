import React from 'react';
import {connect} from 'react-redux';
import {gql, useQuery} from '@apollo/client';

const USER_QUERY = gql`
  query User(
    $authToken: String!
    $mobile: String
    $name: String
    $email: String
  ) {
    user(authToken: $authToken, mobile: $mobile, name: $name, email: $email) {
      name
      email
      mobile
      authToken
    }
  }
`;
const withAuthorization = Component => {
  const NewComponent = props => {
    console.log(props.authUser.uid, props.authUser.phoneNumber);
    const {data, loading, error} = useQuery(USER_QUERY, {
      variables: {
        authToken: props.authUser.uid,
        mobile: props.authUser.phoneNumber,
      },
    });
    console.log(data, error, loading);
    return <Component {...props} />;
  };

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
  });

  return connect(mapStateToProps)(NewComponent);
};

export default withAuthorization;
