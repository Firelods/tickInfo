import { CheckerComponent } from './checker/checker.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ParticipationComponent } from './participation/participation.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'events', component: EventsComponent
  },
  {
    path: '*', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'gestion', component: ParticipationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'checker', component: CheckerComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
