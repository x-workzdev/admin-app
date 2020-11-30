import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ViewticketsComponent } from './tickets/tickets.component';
import { ViewGadgetsComponent } from './gadgets/gadgets.component';
import { ViewClientRegistersComponent } from './clients/clients.component';


const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path : 'profile',component : ProfileComponent},
  {path : 'clients',component : ViewClientRegistersComponent},
  {path : 'tickets',component : ViewticketsComponent},
  {path : 'gadgets',component : ViewGadgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
