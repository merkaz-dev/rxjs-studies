import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  errors$: Observable<string[]>;
  showMessages = false;

  constructor(private messagesService: MessagesService) {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => {
        this.showMessages = true;
      })
    );
  }

  ngOnInit(): void {}
  onClose() {
    this.showMessages = false;
  }
}
