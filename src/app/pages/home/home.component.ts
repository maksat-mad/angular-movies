import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movieService = inject(MovieService);
  trendingMovies: Movie[] = [];
  trendingMoviesLoading = true;
  subscriptions = new Subscription();

  ngOnInit(): void {
    this.trendingMoviesLoading = true;
    this.subscriptions.add(this.movieService.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data.results;
    }));
    this.trendingMoviesLoading = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
