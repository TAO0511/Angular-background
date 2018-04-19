export class Shop {
  static USER_TYPES: any = [
    {value: 1, name: '客户账号'},
    {value: 0, name: '测试账号'}
  ];
  static VERSION_TYPES: any = [
    {value: 0, name: '基础版'},
    {value: 1, name: '高级版'},
    {value: 2, name: '连锁版'},
    {value: 3, name: '试用版'}
  ];
  static APPROVE_STATUSES: any = [
    {value: 0, name: '等待审核'},
    {value: 1, name: '审核通过'},
    {value: 2, name: '审核失败'},
    {value: 3, name: '重新审核'},
  ];
  static USABLE_STATUSALL: any = [
    {value: -1, name: '删除'},
    {value: 1, name: '启用'},
    {value: 0, name: '停用'},
  ];
  static USABLE_STATUSES: any = [
    {value: 1, name: '启用'},
    {value: 0, name: '停用'},
  ];

}
