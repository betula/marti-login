import { useNavigate } from 'react-router-dom';
import { currentUserService } from '../../../lib/currentUser.service';
import { useEffect } from 'react';


interface Props {
  loggedOut?: boolean;
}

export const Guard: React.FC<Props> = ({ loggedOut = false }) => {
  const navigate = useNavigate();
  const currentUserLoggedIn = currentUserService.isLoggedIn;

  useEffect(() => {
    if (currentUserLoggedIn && !loggedOut) {
      return;
    }
    if (!currentUserLoggedIn && loggedOut) {
      return;
    }

    if (loggedOut) {
      navigate('/welcome');
    } else {
      navigate('/sign-in');
    }
  }, [currentUserLoggedIn, loggedOut, navigate])

  return null;
}