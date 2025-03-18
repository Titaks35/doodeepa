import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  /* { path: 'movies/:title', component: MovieDetailComponent },
  { path: 'tvs', component: TvsComponent },
  { path: 'signup', component: signupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }, */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
