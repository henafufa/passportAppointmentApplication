// import built-in modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// import custom module
import { HomeComponent } from './components/home/home.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { AppointmentService } from './services/appointment.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { StatusFormComponent } from './components/status-form/status-form.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleAppointmentComponent,
    LoginPageComponent,
    SignupPageComponent,
    StatusFormComponent,
    ApplicationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
