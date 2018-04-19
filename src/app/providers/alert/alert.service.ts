import {Injectable} from '@angular/core';
declare var $: any;
@Injectable()
export class AlertService {
  private alertTimeout: any;
  private typeList: any = [
    'info', 'success', 'warning', 'danger'
  ];
  constructor() { }

  /**
   *  控制台弹框
   * @param type 弹框类型
   * @param title 标题
   * @param message 内容
   * @param timeout 延迟隐藏时间，默认3秒
   */
  alert(type: string, title: string, message: string, timeout?: number) {
    if (type === 'error') {
      type = 'danger';
    }
    const consoleAlert = $('#console_alert');
    if (consoleAlert.length > 0 ) {
      $('#console_title').text(title);
      $('#console_message').text(message);
      for (let i = 0; i < this.typeList.length; i++) {
        if (consoleAlert.hasClass('alert-' + this.typeList[i])) {
          consoleAlert.removeClass('alert-' + this.typeList[i]);
        }
      }
      consoleAlert.addClass('alert-' + type);
      consoleAlert.show();
    }else {
      const alertDiv = `
        <div class="alert alert-` + type + ` main-alert" role="alert" id="console_alert">
          <h5><strong id="console_title">` + title + `</strong></h5>
          <ul>
            <li id="console_message">` + message + `</li>
          </ul>
        </div>
      `;
      $('body').append(alertDiv);
    }
    this.alertTimeout = setTimeout(function () {
      $('#console_alert').hide();
      clearTimeout(this.alertTimeout);
    }, 3000);

  }

}
