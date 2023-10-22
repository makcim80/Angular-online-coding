import { Component, Input } from '@angular/core';
import { ResponseItem } from '../models/response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: ResponseItem;
}
