import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMe } from './about/about.component';
import { Experience } from './experience/experience.component';
import { Home } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: Home,
  },
  { path: 'about', component: AboutMe },
  { path: 'experience', component: Experience}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
