import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/kit/Layout/Layout';
import { SignIn } from '../components/auth/SignIn/SignIn';
import { SignUp } from '../components/auth/SignUp/SignUp';
import { Forgot } from '../components/auth/Forgot/Forgot';

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <Layout><SignIn /></Layout>,
  },
  {
    path: '/sign-up',
    element: <Layout><SignUp /></Layout>,
  },
  {
    path: '/forgot',
    element: <Layout><Forgot /></Layout>,
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