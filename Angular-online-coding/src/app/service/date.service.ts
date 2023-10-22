import { Injectable } from '@angular/core';
import response from '../../response.json';
import { Response, ResponseItem } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date: Response = response;

  getDate():ResponseItem[] {
    return this.date.items;
  }
}
