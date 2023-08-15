import { useNavigate } from 'react-router-dom';
import { navigateService } from '../../lib/navigate.service';

export const NavigateProvider: React.FC = () => {
  const navigate = useNavigate();
  navigateService.setNavigate(navigate);
  return null;
}