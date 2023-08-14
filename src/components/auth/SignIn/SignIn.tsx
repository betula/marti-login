import { Box } from '../../kit/Box/Box';
import styles from './SignIn.module.css';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';
import icon from './assets/sign-in.svg';
import { Link } from 'react-router-dom';

export const SignIn: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Row>
        <TitleIcon src={icon} />
        <h1>Log in</h1>
      </Row>
      <Row className="body">
        Become a member — you'll enjoy exclusive deals, offers, invites and rewards.
      </Row>
      <Delim />
      <Row>
        <Button text="Log in" />
      </Row>
      <Delim />
      <Row className="center body">
        Don't have an account?
        <Link to="/sign-up">Sign up</Link>
      </Row>
    </Box>
  )
}