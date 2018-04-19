import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from '../../../providers/dialog/dialog.service';
import {Shop} from '../../../models/shop/shop.models';
import {ShopService} from '../../../providers/shop/shop.service';
import {AlertService} from '../../../providers/alert/alert.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
  @Input()
  public shop: any;
  @Output()
  private cancelFn = new EventEmitter();
  @Output()
  private sureFn = new EventEmitter();
  public userTypes: any = Shop.USER_TYPES;
  public versionTypes: any = Shop.VERSION_TYPES;
  private usableStatuses: any = Shop.USABLE_STATUSES;
  public usableStatusAll: any = Shop.USABLE_STATUSALL;
  public data: any;
  public hideDelete: any;

  constructor(private dialogService: DialogService,
              private shopService: ShopService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.hideDelete = this.shop.UsableStatus === -1 ? true : false;
    if (this.shop) {
      this.shop.IsHideRoom = this.shop.IsHideRoom || 0;
    }
    this.getLog();
  }

  cancel() {
    this.cancelFn.emit();
  }

  sure() {
    const req = {
      shopId: this.shop.Id,
      userType: Number(this.shop.UserType),
      versionType: Number(this.shop.VersionType),
      usableStatus: Number(this.shop.UsableStatus),
      isHideRoom: Number(this.shop.IsHideRoom),
    };
    this.shopService.update(req).then(res => {
      if (res.success) {
        this.alertService.alert('success', '商家管理', '保存成功');
        this.sureFn.emit();
      } else {
        this.alertService.alert('danger', '商家管理', res.message);
      }
    });
  }

  delete() {
    const req = {
      shopId: this.shop.Id
    };
    this.dialogService.warningDialog('确定删除该商家吗？', () => {
      this.shopService.delete(req).then(res => {
        if (res.success) {
          this.alertService.alert('success', '商家管理', '删除成功');
          this.cancelFn.emit();
        } else {
          this.alertService.alert('danger', '商家管理', res.message);
        }
        this.dialogService.cancelWarningDialog();
      });
    });
  }

  getLog() {
    const req = {
      shopId: this.shop.Id
    };
    this.shopService.get(req).then(res => {
      if (res.success) {
        this.data = res.data;
      } else {
        this.alertService.alert('danger', '商家管理', res.message);
      }
    });
  }

  getStatus(type:number) {
    let result = '';
    for (const key in this.usableStatusAll) {
      if (type === this.usableStatusAll[key].value) {
        result = this.usableStatusAll[key].name;
      }
    }
    return result;
  }
}
