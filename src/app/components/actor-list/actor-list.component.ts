import {Component, Input} from '@angular/core';
import {Actor} from "../../models/MovieModels";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent {
  @Input() actors!: Actor[];
  @Input() pageLimit!: number;
  @Input() actorsLoading!: boolean;

  actorsPage = 5;

  actorPageHandle(show: boolean) {
    if (show) {
      this.actorsPage += this.pageLimit;
      return;
    }
    this.actorsPage -= this.pageLimit;
  }
}
