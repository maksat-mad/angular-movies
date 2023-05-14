import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-medium-button',
  templateUrl: './medium-button.component.html',
  styleUrls: ['./medium-button.component.scss']
})
export class MediumButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;
}
