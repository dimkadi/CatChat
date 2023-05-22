import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRoutePropsType = {
  isAllowed: boolean;
  redirect?: string;
  children?: React.ReactElement;
};

export default function ProtectedRoute({
  isAllowed,
  redirect = '/',
  children,
}: ProtectedRoutePropsType): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirect} />;
  }

  return children || <Outlet />;
}
