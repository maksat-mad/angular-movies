import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieCoverComponent } from './components/movie-cover/movie-cover.component';
import { BigButtonComponent } from './components/UI/buttons/big-button/big-button.component';
import { MediumButtonComponent } from './components/UI/buttons/medium-button/medium-button.component';
import { SmallButtonComponent } from './components/UI/buttons/small-button/small-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    NotFoundComponent,
    FooterComponent,
    MovieCoverComponent,
    BigButtonComponent,
    MediumButtonComponent,
    SmallButtonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
