import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'login', component: LoginComponent},
  /* { path: 'movies/:title', component: MovieDetailComponent },
  { path: 'tvs', component: TvsComponent },
  { path: 'profile', component: ProfileComponent }, */
  { path: 'home', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
