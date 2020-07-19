import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './part3/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingService],
})
export class AppComponent {
  title = 'rxjs';
  constructor(private loadingService: LoadingService) {}
  getLoading$() {
    return this.loadingService.loading$;
  }
}
