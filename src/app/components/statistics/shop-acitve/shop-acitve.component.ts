import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shop-acitve',
  templateUrl: './shop-acitve.component.html',
  styleUrls: ['./shop-acitve.component.scss']
})
export class ShopAcitveComponent implements OnInit {
  @Output()
  private cancelFn = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cancel() {
    this.cancelFn.emit();
  }
}
