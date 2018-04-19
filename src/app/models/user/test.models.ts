/**
 * Created by Galois Zhou on 20/12/2017 15:42.
 */

export class User {
  token: string;

  constructor() {

  }

  static newInstance(obj: any): User {
    let _user = new User();
    _user.token = obj;
    return _user;
  }
}
