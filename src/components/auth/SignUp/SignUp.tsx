import { Box } from '../../kit/Box/Box';
import styles from './SignUp.module.css';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import icon from './assets/sign-up.svg';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Row>
        <TitleIcon src={icon} />
        <h1>Sign up</h1>
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
        Already have a account?
        <Link to="/sign-in">Log in</Link>
      </Row>
    </Box>
  )
}