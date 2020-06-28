import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import {FlashMessagesModule} from 'angular2-flash-messages/module';
import { OwnersignupComponent } from './components/ownersignup/ownersignup.component';
import { DisplayComponent } from './components/display/display.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
//import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes =  [
  //{path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'ownersignup', component: OwnersignupComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  {path:'display', component: DisplayComponent},

  
  {path:'test', component: TestComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'home', component: HomeComponent}
  //{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  //{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
   // NavbarComponent,
    LoginComponent,
    SignupComponent,
    OwnersignupComponent,
    DisplayComponent,
  
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TestComponent
    
    
   // HomeComponent,
    //DashboardComponent,
    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),

  ],
providers: [ValidateService,AuthService/*,AuthGuard*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
