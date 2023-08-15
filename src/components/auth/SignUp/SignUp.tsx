import { Box } from '../../kit/Box/Box';
import styles from './SignUp.module.css';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import icon from './assets/sign-up.svg';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';
import { Link } from 'react-router-dom';
import { Input } from '../../form/Input/Input';
import { useSignUpForm } from './SignUp.form';
import { Password } from '../../form/Password/Password';
import { StrongPassword } from '../../form/StrongPassword/StrongPassword';

export const SignUp: React.FC = () => {
  const form = useSignUpForm();
  const { email, password, repeatPassword } = form.fields;
  const { error, handleSubmitEvent } = form;

  return (
    <Box className={styles.container}>
      <form onSubmit={handleSubmitEvent}>
        <Row>
          <TitleIcon src={icon} />
          <h1>Sign up</h1>
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
          <StrongPassword
            label="Password"
            placeholder="Enter your password"
            required
            error={password.error}
            value={password.value}
            onChange={password.setValue} />
        </Row>
        <Row>
          <Password
            label="Repeat password"
            placeholder="Repeat your password"
            required
            error={repeatPassword.error || form.group.error}
            value={repeatPassword.value}
            onChange={repeatPassword.setValue} />
        </Row>
        <Row className="muted">
          Minimum of 8 characters, with upper and lowercase and a number or a symbol.
        </Row>
        <Row>
          <Button
            progress={form.pending}
            disabled={form.blocked}
            type="submit">Become a member</Button>
        </Row>
        <Delim />
        <Row className="center body">
          Already have an account?
          <Link to="/sign-in">Log in</Link>
        </Row>
      </form>
    </Box>
  )
}