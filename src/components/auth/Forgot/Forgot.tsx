import { Box } from '../../kit/Box/Box';
import styles from './Forgot.module.css';
import icon from './assets/password.svg';
import { Row } from '../../kit/Row/Row';
import { Delim } from '../../kit/Delim/Delim';
import { Button } from '../../kit/Button/Button';
import { TitleIcon } from '../../kit/TitleIcon/TitleIcon';
import { useForgotForm } from './Forgot.form';
import { Input } from '../../form/Input/Input';
import { Link } from 'react-router-dom';

export const Forgot: React.FC = () => {
  const form = useForgotForm();
  const { email } = form.fields;
  const { handleSubmitEvent, instructionSentTo } = form;

  return (
    <Box className={styles.container}>
      <form onSubmit={handleSubmitEvent}>
        <Row>
          <TitleIcon src={icon} />
          <h1>Forgot password?</h1>
        </Row>
        <Row className="body wordBreak">
          {instructionSentTo ? (
            <div><b>Great!</b> If your email address <b>{instructionSentTo}</b> is registered with us, please check It for password recovery instructions.</div>
          ) : (
            <>Please enter the email address you used to create your account, and we'll send you a link to reset your password.</>
          )}
        </Row>
        <Delim />
        <Row>
          <Input
            label="Email"
            placeholder="Enter your email address"
            required
            error={email.error}
            value={email.value}
            onChange={email.setValue} />
        </Row>
        <Row className="right">
          <Link to="/sign-in" className="muted">
            Remember the password?
          </Link>
        </Row>
        <Row>
          <Button
            progress={form.pending}
            disabled={form.blocked}
            type="submit">Submit</Button>
        </Row>
      </form>
    </Box>
  )
}