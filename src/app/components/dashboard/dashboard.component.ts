import {Component, OnInit} from '@angular/core';
import {UserService} from '../../providers/user/user.service';
import {User} from '../../models/user/test.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private testData: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.userService.test().then(data => {
    //   this.testData = User.newInstance(data.data);
    // }, error => {
    //
    // });

  }

}
