import { Component, OnInit } from '@angular/core';
import { IListItem } from 'src/models/listItem';
import { Subscription } from 'rxjs';
import { FlatJoinService } from 'src/app/services/flat-join.service';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.css'],
})
export class SwitchAllComponent implements OnInit {
  subscription: Subscription;
  elements: IListItem[] = [];
  constructor(private FlatJoinService: FlatJoinService) {}

  ngOnInit(): void {}
  runSwitchAll() {
    this.subscription = this.FlatJoinService.runSwitchAll().subscribe((el) => {
      this.elements.push(el);
    });
  }

  clearArray() {
    this.elements = [];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
