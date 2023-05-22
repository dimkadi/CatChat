import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Loader from '../ui/Loader';

type LoaderWrapperPropsType = {
  children: React.ReactElement;
};

export default function LoaderWrapper({ children }: LoaderWrapperPropsType): JSX.Element {
  const user = useAppSelector((store) => store.user);
  if (!user) {
    return <Loader />;
  }
  return children;
}
