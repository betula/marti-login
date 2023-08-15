import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { SignIn } from '../components/auth/SignIn/SignIn';
import { SignUp } from '../components/auth/SignUp/SignUp';
import { Forgot } from '../components/auth/Forgot/Forgot';
import { Welcome } from '../components/Welcome/Welcome';
import { Page } from '../components/Page/Page';

const router = createHashRouter([
  {
    path: '/sign-in',
    element: <Page><SignIn /></Page>
  },
  {
    path: '/sign-up',
    element: <Page><SignUp /></Page>,
  },
  {
    path: '/forgot',
    element: <Page><Forgot /></Page>,
  },
  {
    path: '/welcome',
    element: <Page loggedIn><Welcome /></Page>,
  },
  {
    path: '*',
    element: <Navigate to='/sign-in' replace />
  }
]);

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}