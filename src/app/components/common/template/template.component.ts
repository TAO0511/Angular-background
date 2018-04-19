import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../../providers/alert/alert.service';
import {DialogService} from '../../../providers/dialog/dialog.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public page: any = {};
  public pages: any;
  public bsValue: any = new Date();

  constructor(private alertService: AlertService,
              private dialogService: DialogService,
              private slimLoadingBarService: SlimLoadingBarService,
              private spinner: NgxSpinnerService) {

  }

  ngOnInit() {

  }

  successAlert() {
    this.page = {
      'total': 200,
    }
    this.alertService.alert('success', '标题', '成功内容');
  }

  infoAlert() {
    this.alertService.alert('info', '标题', '提示内容');
  }

  warningAlert() {
    this.alertService.alert('warning', '标题', '警告内容');
  }

  dangerAlert() {
    this.alertService.alert('error', '标题', '错误内容');
  }

  openModal() {
    this.dialogService.warningDialog('我是一下撒', function () {
      setTimeout(() => {
        console.log('1111');
      }, 1000);
    });
  }

  onPageChanged() {
    console.log('onPageChanged', this.page);
  }

  openLoading() {
    console.log('111');
    this.slimLoadingBarService.start();
    setTimeout(() => {
      this.slimLoadingBarService.start();
    }, 1000);
    setTimeout(() => {
      this.slimLoadingBarService.complete();
    }, 5000);
    setTimeout(() => {
      this.slimLoadingBarService.complete();
    }, 8000);
  }

  changeDate() {
    console.log(this.bsValue);
  }

  openLoadings() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },5000);
  }
}
