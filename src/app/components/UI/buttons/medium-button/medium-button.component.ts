import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-medium-button',
  templateUrl: './medium-button.component.html',
  styleUrls: ['./medium-button.component.scss']
})
export class MediumButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;
  @Output() show = new EventEmitter();

  handleButtonClick() {
    switch (this.text) {
      case 'Show More':
        this.show.emit(true);
        break;
      case 'Show Less':
        this.show.emit(false);
    }
  }
}
