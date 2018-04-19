import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../providers/shop/shop.service';
import { DialogService } from '../../providers/dialog/dialog.service';
import { Shop } from '../../models/shop/shop.models';
import { StatisticsService } from '../../providers/statistics/statistics.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public page: any = {
    PageNo: 1,
    PageSize: 10
  };
  public deletePage: any = {
    PageNo: 1,
    PageSize: 10
  };
  public pageType: String = 'list';
  private shops: any;
  private deleteShops: any;
  private model: any = {
    name: '',
    address: '',
    contactPhone: '',
    userType: '',
    versionType: '',
    isHideRoom: '',
  };
  private selectShop: any;
  public shopType: String = 'normal';
  private userTypes: any = Shop.USER_TYPES;
  private versionTypes: any = Shop.VERSION_TYPES;
  private usableStatusAll: any = Shop.USABLE_STATUSALL;
  
  constructor(private shopService: ShopService,
              private statisticsService: StatisticsService,
              private dialogService: DialogService) {
  }
  
  ngOnInit() {
    this.query();
  }
  
  /*查询商家列表*/
  query() {
    this.shopType = 'normal';
    const req = {
      pageNo: this.page.PageNo,
      pageSize: this.page.PageSize,
      name: this.model.name,
      address: this.model.address,
      contactPhone: this.model.contactPhone,
      userType: this.model.userType,
      versionType: this.model.versionType,
      isHideRoom: this.model.isHideRoom,
      isDelete: 0
    };
    this.shopService.search(req).then(res => {
      if (res && res.success) {
        this.shops = res.data || [];
        this.page = res.page;
      }
    });
  }
  
  /*查询删除商家列表*/
  queryDelete() {
    this.shopType = 'delete';
    const req = {
      pageNo: this.deletePage.PageNo,
      pageSize: this.deletePage.PageSize,
      name: this.model.name,
      address: this.model.address,
      contactPhone: this.model.contactPhone,
      userType: this.model.userType,
      versionType: this.model.versionType,
      isHideRoom: this.model.isHideRoom,
      isDelete: 1
    };
    // 查询商家列表
    this.shopService.search(req).then(res => {
      if (res && res.success) {
        this.deleteShops = res.data;
        this.deletePage = res.page;
      }
    });
  }
  
  search() {
    if (this.shopType === 'normal') {
      this.page.PageNo = 1;
      this.query();
    } else {
      this.deletePage.PageNo = 1;
      this.queryDelete();
    }
  }
  
  clear() {
    for (const key in this.model) {
      this.model[key] = '';
    }
    if (this.shopType == 'normal') {
      this.query();
    }
    if (this.shopType == 'delete') {
      this.queryDelete();
    }
  }
  
  
  reset(shopId: any) {
    console.log(shopId);
    this.dialogService.warningDialog('确定还原该商家吗？', () => {
      this.dialogService.cancelWarningDialog();
    });
  }
  
  gotoDetail(shop: any) {
    this.pageType = 'detail';
    this.selectShop = shop;
  }
  
  gotoList() {
    this.pageType = 'list';
  }
  
  editSuccess() {
    this.gotoList();
    this.query();
    this.queryDelete();
  }
  
  getStatus(type: number) {
    let result = '';
    for (const key in this.usableStatusAll) {
      if (type === this.usableStatusAll[key].value) {
        result = this.usableStatusAll[key].name;
      }
    }
    return result;
  }
  
  getType(type: number) {
    let result = '';
    for (const key in this.userTypes) {
      if (type === this.userTypes[key].value) {
        result = this.userTypes[key].name;
      }
    }
    return result;
  }
  
  getVersion(type: number) {
    let result = '';
    for (const key in this.versionTypes) {
      if (type === this.versionTypes[key].value) {
        result = this.versionTypes[key].name;
      }
    }
    return result;
  }
  
  getIsHideRoom(type: number) {
    if (type === 1) {
      return '是';
    } else {
      return '否';
    }
  }
  
}
