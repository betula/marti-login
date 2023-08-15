import { NavigateProvider } from '../NavigateProvider/NavigateProvider';
import { Guard } from '../auth/Guard/Guard';
import { Layout } from '../kit/Layout/Layout';

interface Props {
  loggedIn?: boolean;
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ loggedIn = false, children }) => {
  return (
    <>
      <Guard loggedOut={!loggedIn} />
      <NavigateProvider />
      <Layout>
        {children}
      </Layout>
    </>
  )
}