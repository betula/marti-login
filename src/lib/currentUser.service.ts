import { service, signal } from 'react-signals-app';
import { User } from './userApi.service';

const StorageKey = 'session';

class CurrentUserService {
  private startSession() {
    try {
      const raw = sessionStorage.getItem(StorageKey);
      const user = JSON.parse(raw || '');
      if (user && user.email) {
        this._user = user;
      }
    }
    catch {
      // ignore
    }
  }

  private keepSession() {
    try {
      sessionStorage.setItem(StorageKey, JSON.stringify(this.user));
    }
    catch {
      // ignore
    }
  }

  @signal _user?: User;

  get user(): User | undefined {
    return this._user;
  }
  set user(user: User | undefined) {
    this._user = user;
    this.keepSession();
  }

  get isLoggedIn() {
    return !!this.user;
  }
  get isLoggedOut() {
    return !this.isLoggedIn;
  }

  constructor() {
    this.startSession();
  }

  login = (user: User) => {
    this.user = user;
  }
  logout = () => {
    this.user = void 0;
  }
}

export const currentUserService = service(CurrentUserService);