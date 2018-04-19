import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../providers/user/user.service';
import {AlertService} from '../../providers/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {
    username: '',
    password: ''
  };
  public isRemember: boolean = false;
  @Output()
  private success = new EventEmitter();

  constructor(private userService: UserService, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  login() {
    if (!this.validation()) {
      return false;
    }
    const params = {
      username: this.user.username,
      password: this.user.password
    };
    console.log(params, this.isRemember);
    this.userService.signIn(params).then(res => {
      if (res.success) {
        localStorage.setItem('access_token', res.data && res.data.accessToken || '');
        this.success.emit();
      } else {
        this.alertService.alert('warning', '账号登陆', res.message);
      }
    });
  }

  validation() {
    if (!this.user.username) {
      this.alertService.alert('warning', '账号登录', '请输入账号');
      return false;
    }
    if (!this.user.password) {
      this.alertService.alert('warning', '账号登录', '请输入密码');
      return false;
    }
    return true;
  }
}
