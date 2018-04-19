import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public title: string;
  public message: string;
  public cancel: any;
  public ok: any;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

}
