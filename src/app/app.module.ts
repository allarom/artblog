import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

// --- services
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { AuthService } from './services/auth.service';

// --- components
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


// --- routes
const routes: Routes = [
  { path: '',  component: HomepageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent, 
    HomepageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, InitAuthGuardService, RequireUserGuardService, RequireAnonGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
