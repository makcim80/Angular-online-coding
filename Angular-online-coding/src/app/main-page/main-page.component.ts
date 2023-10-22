import { Component } from '@angular/core';
import { DateService } from '../service/date.service';
import { ResponseItem } from '../models/response.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  date: ResponseItem[] = this.service.getDate();

  constructor(private service: DateService) {}
}
