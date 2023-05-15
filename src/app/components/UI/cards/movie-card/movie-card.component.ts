import {Component, inject, Input, OnDestroy} from '@angular/core';
import {Movie} from "../../../../models/Movie";
import {Subscription} from "rxjs";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnDestroy {
  @Input() movie!: Movie;
  subscriptions = new Subscription();
  movieService = inject(MovieService);

  setMovie() {
    this.subscriptions.add(
      this.movieService.getMovieById(this.movie.id).subscribe(data => {
        this.movieService.movie.next(data);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
