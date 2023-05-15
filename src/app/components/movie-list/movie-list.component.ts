import {Component, Input} from '@angular/core';
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies!: Movie[];
  @Input() pageLimit!: number;
  @Input() moviesLoading!: boolean;

  moviesPage = 6;

  moviesPageHandle(show: boolean) {
    if (show) {
      this.moviesPage += this.pageLimit;
      return;
    }
    this.moviesPage -= this.pageLimit;
  }
}
