import { signal } from 'react-signals-app';

import { FormGroupControl, GroupOptions } from './FormGroupControl';

export abstract class Form<T extends GroupOptions> {
  abstract group: FormGroupControl<T>;

  get fields() {
    return this.group.fields;
  }
  get hasError() {
    return this.group.hasError;
  }
  get blocked() {
    return this.pending || this.hasError;
  }

  @signal
  pending = false;

  protected abstract send(): Promise<void>;

  async submit() {
    if (this.blocked) return;

    this.group.validate();
    if (this.hasError) return;

    try {
      this.pending = true;
      await this.send();
    }
    catch (e) {
      console.error('Show server error notification', e);
    }
    finally {
      this.pending = false;
    }
  }

  reset() {
    this.group.reset();
  }

  handleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.submit();
  }
}