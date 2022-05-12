import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AirlineComponent } from './airline/airline.component';
import { FlightsheduleComponent } from './flightshedule/flightshedule.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'booking',component:BookingComponent,canActivate:[AuthGuard]},
  {path:'addbooking',component:BookingDialogComponent,canActivate:[AuthGuard]},
  {path:'airline',component:AirlineComponent,canActivate:[AuthGuard]},
  {path:'flightshedule',component:FlightsheduleComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
