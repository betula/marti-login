import { service } from 'react-signals-app';
import { NavigateFunction } from 'react-router-dom';

class NavigateService {
  private _navigate?: NavigateFunction;

  setNavigate(navigate: NavigateFunction) {
    this._navigate = navigate;
  }

  navigate(url: string) {
    if (!this._navigate) {
      throw 'Navigate provider doesnot added to React router context';
    }
    this._navigate(url);
  }
}

export const navigateService = service(NavigateService);