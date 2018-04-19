import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ConfirmComponent} from '../../components/common/confirm/confirm.component';

@Injectable()
export class DialogService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  /**
   * 警告确认框
   * @param message 内容
   * @param ok  确定执行方法
   * @param cancel 退出执行方法
   * @param title 标题，默认为提示
   */
  warningDialog(message: string,  ok?: any , cancel?: any , title?: string) {
    this.bsModalRef = this.modalService.show(ConfirmComponent, Object.assign({}, { class: 'modal-console' }));
    this.bsModalRef.content.title = title || '提示';
    this.bsModalRef.content.message = message || '内容' ;
    this.bsModalRef.content.ok = function () {
      if (ok && typeof ok === 'function') {
        ok();
      }
      // this.bsModalRef.hide();
    };
    this.bsModalRef.content.cancel = function () {
      if (cancel && typeof cancel === 'function') {
        cancel();
      }
      this.bsModalRef.hide();
    };
  }

  /**
   * 退出警告确认框
   */
  cancelWarningDialog() {
    this.bsModalRef.hide();
  }
}
