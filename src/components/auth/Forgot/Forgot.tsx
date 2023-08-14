import { Box } from '../../kit/Box/Box';
import styles from './Forgot.module.css';
import icon from './assets/password.svg';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';

export const Forgot: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Row>
        <TitleIcon src={icon} />
        <h1>Forgot password?</h1>
      </Row>
      <Row className="body">
        Please enter the email address you used to create your account, and we'll send you a link to reset your password.
      </Row>
      <Delim />
      <Row>
        <Button text="Submit" />
      </Row>
    </Box>
  )
}