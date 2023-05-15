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
  subscriptions = new Subscription();
  pageLimit = 6;

  trendingMovies: Movie[] = [];
  trendingMoviesLoading = true;
  trendingMoviesPage = 6;

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

  trendingMoviesPageHandle(show: boolean) {
    if (show) {
      this.trendingMoviesPage += this.pageLimit;
      return;
    }
    this.trendingMoviesPage -= this.pageLimit;
  }
}
