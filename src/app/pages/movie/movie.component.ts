import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription, switchMap} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Actor} from "../../models/MovieModels";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  movieService = inject(MovieService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  trailerLink = '';
  actors: Actor[] = [];
  actorsLoading = true;

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.paramMap.pipe(
        switchMap(paramMap => this.movieService.getMovieById(+paramMap.get('id')!))
      ).subscribe(data => {
          this.movieService.movie.next(data);

          this.subscriptions.add(
            this.movieService.getMovieVideos(data.id).subscribe(info => this.trailerLink = info.results[0].key)
          );

          this.actorsLoading = true;
          this.subscriptions.add(
            this.movieService.getMovieActors(data.id).subscribe(info => this.actors = info.cast)
          );
          this.actorsLoading = false;
        },
        error => {
          this.router.navigate(['/not-found']);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
