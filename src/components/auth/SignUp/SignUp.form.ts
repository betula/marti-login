import { hook, signal } from 'react-signals-app';
import { FormGroupControl } from '../../../lib/form/FormGroupControl';
import { emailValidator } from '../../../lib/form/validator/emailValidator';
import { requiredValidator } from '../../../lib/form/validator/requiredValidator';
import { Form } from '../../../lib/form/Form';
import { passwordValidator } from '../../../lib/form/validator/passwordValidator';
import { userApiService } from '../../../lib/userApi.service';
import { currentUserService } from '../../../lib/currentUser.service';
import { navigateService } from '../../../lib/navigate.service';

const FormConfig = {
  email: [
    requiredValidator('Email'), 
    emailValidator()
  ],
  password: [
    requiredValidator('Password'),
    passwordValidator()
  ],
  repeatPassword: [
    requiredValidator('Repeat password'),
  ]
};

export class SignUpForm extends Form<typeof FormConfig> {
  group = new FormGroupControl(FormConfig, (value) => {
    if (value.password !== value.repeatPassword) {
      return 'The passwords are not the same'
    }
    return '';
  });

  @signal error = '';

  protected async send() {
    const { email, password } = this.group.value;

    const answer = await userApiService.signUp(email, password);
    if (!answer.ok) {
      this.error = answer.error;
      return;
    }

    this.error = '';
    currentUserService.login(answer.user);
    this.reset();
    this.doFinish();
  }

  protected doFinish() {
    navigateService.navigate('/welcome');
  }
}

export const useSignUpForm = hook(SignUpForm);