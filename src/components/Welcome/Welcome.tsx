import { Box } from '../kit/Box/Box';
import styles from './Welcome.module.css';
import { Row } from '../kit/Row/Row';
import { Button } from '../kit/Button/Button';
import { TitleIcon } from '../kit/TitleIcon/TitleIcon';
import icon from './assets/welcome.svg';
import { currentUserService } from '../../lib/currentUser.service';


export const Welcome: React.FC = () => {
  const { user, logout } = currentUserService;
  if (!user) return;

  return (
    <Box className={styles.container}>
      <Row>
        <TitleIcon src={icon} />
        <h1>Welcome</h1>
      </Row>
      <Row className="body wordBreak">
        <div>
          Welcome to the system our dear user <b>{user.email}</b>, here you will find all the best!
        </div>
      </Row>
      <Row />
      <Row>
        <Button
          onClick={logout}
          type="button">Logout</Button>
      </Row>
    </Box>
  )
}