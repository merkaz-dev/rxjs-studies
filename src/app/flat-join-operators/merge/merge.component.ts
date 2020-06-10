import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlatJoinService } from 'src/app/services/flat-join.service';
import { Subscription } from 'rxjs';
import { IListItem } from 'src/models/listItem';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  elements: IListItem[] = [];

  constructor(private FlatJoinService: FlatJoinService) {}

  ngOnInit(): void {}

  runMerge() {
    this.subscription = this.FlatJoinService.runMerge().subscribe((el) => {
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
