import { Box } from '../../kit/Box/Box';
import styles from './SignIn.module.css';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';
import icon from './assets/sign-in.svg';
import { Link } from 'react-router-dom';
import { Input } from '../../form/Input/Input';
import { useSignInForm } from './SignIn.form';
import { Password } from '../../form/Password/Password';


export const SignIn: React.FC = () => {
  const form = useSignInForm();
  const { email, password } = form.fields;
  const { error, handleSubmitEvent } = form;

  return (
    <Box className={styles.container}>
      <form onSubmit={handleSubmitEvent}>
        <Row>
          <TitleIcon src={icon} />
          <h1>Log in</h1>
        </Row>
        <Row className="body">
          Become a member — you'll enjoy exclusive deals, offers, invites and rewards.
        </Row>
        <Delim />

        {error ? (
          <Row className="error">
            {error}
          </Row>
        ) : null}

        <Row>
          <Input
            label="Email"
            placeholder="Enter your email address"
            required
            error={email.error}
            value={email.value}
            onChange={email.setValue} />
        </Row>
        <Row>
          <Password
            label="Password"
            placeholder="Enter your password"
            required
            error={password.error}
            value={password.value}
            onChange={password.setValue} />
        </Row>
        <Row className="right">
          <Link to="/forgot" className="muted">
            Forgot password?
          </Link>
        </Row>
        <Row>
          <Button
            progress={form.pending}
            disabled={form.blocked}
            type="submit">Log in</Button>
        </Row>      
        <Delim />
        <Row className="center body">
          Don't have an account?
          <Link to="/sign-up">Sign up</Link>
        </Row>
      </form>
    </Box>
  )
}