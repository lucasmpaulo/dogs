import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext'

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />
  else return null;
}

export default ProtectedRoute
