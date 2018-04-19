import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-shop-statistics',
  templateUrl: './shop-statistics.component.html',
  styleUrls: ['./shop-statistics.component.scss']
})
export class ShopStatisticsComponent implements OnInit {
  static StaData = [{name: '活跃商户数', value: '30', page: 'shopActive'},
    {name: '收款交易笔数', value: '30'},
    {name: '收款交易额', value: '￥131210'},
    {name: '预约数', value: '30'},
    {name: '会员数', value: '30'},
    {name: '新注册账号数', value: '3000'},
    {name: 'dkd主页访问量', value: '--'},
    {name: '登陆页', value: '--'},
    {name: '注册页', value: '--'},
    {name: '帮助中心点击数', value: '--'},
    {name: 'APP下载数', value: '--'},
    {name: '安卓下载数', value: '--'},
    {name: 'IOS版本下载数', value: '--'},
    {name: '短信验证码发送量', value: '--'},
    {name: '短信提醒发送量', value: '--'},
    {name: '今日收费额', value: '--'},
    {name: '今日付费用户数', value: '--'},];
  public options = {
    startTime: new Date(),
    endTime: new Date(),
    bgRed: 1,
  };
  private datas: Array<any> = ShopStatisticsComponent.StaData;
  public pageType = 'list';

  constructor() {
  }

  ngOnInit() {
    let params = {
      start: moment(this.options.startTime).format('YYYY-MM-DD'),
      end: moment(this.options.endTime).format('YYYY-MM-DD'),
    };
    this.query(params);
  }

  query(event) {
    console.log(event);
  }

  openPage(type) {
    if (type) {
      this.pageType = type;
    }
  }

  gotoList() {
    this.pageType = 'list';
  }

}
