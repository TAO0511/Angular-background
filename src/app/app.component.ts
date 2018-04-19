/**
 * Created by Galois Zhou on 20/12/2017 15:16.
 */

import {Component, OnInit} from '@angular/core';
import {UserService} from './providers/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from './providers/http/http.service';
import {DialogService} from './providers/dialog/dialog.service';
import {AlertService} from './providers/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isLoginSuccess = true;
  private navs: any = [];

  constructor(private httpService: HttpService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.navBuild();

    this.isLoginSuccess = localStorage.getItem('access_token') ? true : false;

    this.httpService.getAuthMessage().subscribe(data => {
      this.isLoginSuccess = data;
    });
  }

  navBuild() {
    const activeUrl = window.location.pathname;
    this.userService.navBuild().then(res => {
      this.navs = res;
      this.navs.forEach(function (nav) {
        if (nav.url == activeUrl) {
          nav.checked = true;
        }
        if (nav.children.length > 0) {
          nav.children.forEach(function (child) {
            if (child.url == activeUrl) {
              nav.checked = true;
              nav.active = true;
              child.checked = true;
            }
          });
        }
      });
    });
  }

  selectNav(nav) {
    if (nav.url) {
      this.router.navigate([nav.url]);
      nav.checked = true;
    } else {
      nav.active = !nav.active;
    }
  }

  selectItem(item, nav) {
    console.log('-----------------item, nav: ', item, nav);
    this.navs.forEach(function (nav) {
      nav.checked = false;
      if (nav.children.length > 0) {
        nav.children.forEach(function (child) {
          child.checked = false;
        });
      }
    });
    item.checked = true;
    nav.checked = true;
    this.router.navigate([item.url]);
  }

  loginSuccess() {
    this.isLoginSuccess = true;
  }

  isShowDashboard() {
    return this.isLoginSuccess;
  }

  gotoLogin() {
    this.dialogService.warningDialog('确定退出账号吗?', () => {
      this.userService.signOut().then(res => {
        if (res.success) {
          this.httpService.gotoLogin();
        } else {
          this.alertService.alert('warning', '账号退出', res.message);
        }
        this.dialogService.cancelWarningDialog();
      });
    });
  }
}
