import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();

  if (isLoading) return <CircularProgress />

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;