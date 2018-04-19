import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
/* page为分页配置对象，默认每页条数PageSize为10,当前页数PageNo为1，请求完成需要修改page，总数DataCount为必填项
 onPageChanged监听页码发生改变，执行的函数
 * <app-page [page]="page" (onPageChanged)="onPageChanged()" ></app-page>
 * */
export class PageComponent implements OnInit {
  @Input()
  page: any = {
    PageSize: '',
    PageNo: '',
    DataCount: '',
    PageCount: '',
  };
  @Output() onPageChanged = new EventEmitter();
  public maxSize: Number = 5;
  public previousText = '上一页';
  public nextText = '下一页';
  public boundaryLinks = true;
  public firstText = '首页';
  public lastText = '尾页';
  public lines = [10, 20, 50, 100];

  constructor() {
  }

  ngOnInit() {
    if (!this.page.PageSize) {
      this.page.PageSize = 10;
    }
    if (!this.page.PageNo) {
      this.page.PageNo = 1;
    }
  }

  pageChanged(event: any): void {
    this.page.PageNo = event.page;
    this.onPageChanged.emit();
  }

  pageSizeChanged(): void {
    this.page.PageNo = 1;
    this.onPageChanged.emit();
  }
}
