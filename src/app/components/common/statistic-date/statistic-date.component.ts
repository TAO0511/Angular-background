import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { AlertService } from '../../../providers/alert/alert.service';

@Component({
  selector: 'app-statistic-date',
  templateUrl: './statistic-date.component.html',
  styleUrls: ['./statistic-date.component.scss']
})
export class StatisticDateComponent implements OnInit {
  @Input()
  public options: any = {
    startTime: '',
    endTime: '',
    bgRed: Number,
  };
  @Output()
  private query = new EventEmitter();
  public bsConfig = {dateInputFormat: 'YYYY-MM-DD'};
  
  constructor(private alertService: AlertService) {
  }
  
  ngOnInit() {
  }
  
  /*
  * 选择时间区间
  * */
  timing(type) {
    let date = [];
    var dateToday = moment().format("YYYY-MM-DD");
    var lastMonth = moment().subtract(1, 'months'); //上个月
    var threeMonth = moment().subtract(2, 'months').format("YYYY-MM-DD"); //最佳3个月
    var yestday = moment().subtract(1, 'd');
    this.options.bgRed = type;
    if (type === 1) {
      // this.options.indexTime.name = '今日<1天>';
      date = [moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")];
    }
    if (type === 2) {
      // this.options.indexTime.name = '本月<30天>';
      date = [moment().startOf('month').format("YYYY-MM-DD"), moment().endOf('month').format("YYYY-MM-DD")];
    }
    if (type === 3) {
      // this.options.indexTime.name = '上月<30天>';
      date = [moment(lastMonth).startOf('month').format("YYYY-MM-DD"),
        moment(lastMonth).endOf('month').format("YYYY-MM-DD")];
    }
    if (type === 4) {
      // this.options.indexTime.name = '最近三月<90天>';
      date = [threeMonth, dateToday];
    }
    if (type === 6) {
      // this.options.indexTime.name = '昨天<1天>';
      date = [yestday.format('YYYY-MM-DD'), yestday.format('YYYY-MM-DD')];
    }
    if (type === 7) {
      let lastWeek = moment().subtract(1, 'w');
      // this.options.indexTime.name = '上周<7天>';
      date = [lastWeek.isoWeekday(1).format('YYYY-MM-DD'),
        lastWeek.isoWeekday(7).format('YYYY-MM-DD')];
    }
    if (type === 8) {
      // this.options.indexTime.name = '本周<7天>';
      date = [moment().isoWeekday(1).format('YYYY-MM-DD'),
        moment().format("YYYY-MM-DD")];
    }
    if (type === 5) {
      date = [this.options.startTime, this.options.endTime];
    }
    
    this.options.startTime = new Date(date[0]);
    this.options.endTime = new Date(date[1]);
    
    
    if (this.isMoreThan3Years()) {
      return false;
    }
    
    if (this.isStartHehindEnd()) {
      return false;
    }
    
    // this.options.indexTime.time(date, this.options.bgRed);
  }
  
  /*
   * 选择其他时间
   * */
  otherDate() {
    if (this.options.startTime && this.options.endTime && this.options.bgRed) {
      let otherDate = [moment(this.options.startTime).format("YYYY-MM-DD"),
        moment(this.options.endTime).format("YYYY-MM-DD")];
      
      if (this.isMoreThan3Years()) {
        return false;
      }
      
      if (this.isStartHehindEnd()) {
        return false;
      }
      // this.options.bgRed = 5;
    }
  }
  
  /*
   * 检查是否超过3年时间
   */
  
  isMoreThan3Years() {
    if (this.options.startTime && this.options.endTime && moment(this.options.endTime)
        .diff(this.options.startTime, 'years', true) >= 3) {
      this.alertService.alert('warning', '经营数据分析', '查询失败：时间段不能超过 3年，请重新选择！');
      return true;
    }
    return false;
  }
  
  
  isStartHehindEnd() {
    if (this.options.startTime && this.options.endTime && moment(this.options.endTime)
        .isBefore(this.options.startTime)) {
      this.alertService.alert('warning', '经营数据分析', '查询失败：结束时间不能早于开始时间');
      return true;
    }
    return false;
  }
  
  queryFn() {
    let params = {
      start: this.options.startTime ? moment(this.options.startTime).format("YYYY-MM-DD") : '',
      end: this.options.endTime ? moment(this.options.endTime).format("YYYY-MM-DD") : ''
    }
    console.log(this.options);
    this.query.emit(params);
  }
  
}
