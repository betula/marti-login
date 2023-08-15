import { service } from 'react-signals-app';

const EmulateHttpRequestTimeoutMs = 1200;

const StorageKey = 'storage';

export interface User {
  email: string;
  password: string;
}

export type Answer = { ok: false, error: string } | { ok: true, user: User };

class UserApiService {

  private loadStorage(): User[] {
    try {
      const raw = localStorage.getItem(StorageKey);
      return JSON.parse(raw || '') || [];
    }
    catch {
      return [];
    }
  }

  private saveStorage(users: User[]) {
    try {
      localStorage.setItem(StorageKey, JSON.stringify(users));
    }
    catch {
      // ignore
    }
  }

  async signIn(email: string, password: string): Promise<Answer> {
    const users = this.loadStorage();

    // fake request
    await new Promise((resolve) => setTimeout(resolve, EmulateHttpRequestTimeoutMs));

    for (const user of users) {
      if (user.email === email && user.password === password) {
        return {
          ok: true,
          user
        };
      }
    }
    if (users.some(user => user.email == email)) {
      return {
        ok: false,
        error: 'The user is found in the system, but the password does not match.'
      }
    }

    return {
      ok: false,
      error: 'Unable to log in, please verify that your email address and password are correct.'
    }
  }

  async signUp(email: string, password: string): Promise<Answer> {
    const users = this.loadStorage();

    // fake request
    await new Promise((resolve) => setTimeout(resolve, EmulateHttpRequestTimeoutMs));

    for (const user of users) {
      if (user.email === email) {
        return {
          ok: false,
          error: 'User with this email address is already registered in the system, please use the login form.'
        }
      }
    }

    const user: User = {
      email,
      password
    };
    
    this.saveStorage(users.concat(user));
    
    return {
      ok: true,
      user
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async passwordRecovery(_email: string) {
    // fake request
    await new Promise((resolve) => setTimeout(resolve, EmulateHttpRequestTimeoutMs));
  }
}

export const userApiService = service(UserApiService);