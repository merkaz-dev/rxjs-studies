import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IListItem } from 'src/models/listItem';
import { FlatJoinService } from 'src/app/services/flat-join.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  subscription: Subscription;
  elements: IListItem[] = [];
  constructor(private flatJoinService: FlatJoinService) {}

  ngOnInit(): void {}

  runConcat() {
    this.flatJoinService.runConcat().subscribe((el) => {
      this.elements.push(el);
    });
  }

  clearArray() {
    this.elements = [];
  }
  ngOnDestroy(): void {}
}
