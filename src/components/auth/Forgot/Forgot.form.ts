import { hook, signal } from 'react-signals-app';
import { FormGroupControl } from '../../../lib/form/FormGroupControl';
import { emailValidator } from '../../../lib/form/validator/emailValidator';
import { requiredValidator } from '../../../lib/form/validator/requiredValidator';
import { Form } from '../../../lib/form/Form';
import { userApiService } from '../../../lib/userApi.service';

const FormConfig = {
  email: [
    requiredValidator('Email'), 
    emailValidator()
  ]
};

export class ForgotForm extends Form<typeof FormConfig> {
  group = new FormGroupControl(FormConfig);

  @signal instructionSentTo = '';

  protected async send() {
    const { email } = this.group.value;

    await userApiService.passwordRecovery(email);

    this.instructionSentTo = email;
    this.reset();
  }
}

export const useForgotForm = hook(ForgotForm);