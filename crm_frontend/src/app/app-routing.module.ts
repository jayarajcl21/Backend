import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OnboardComponent } from './onboard/onboard.component';
import { ReportsComponent } from './reports/reports.component';
import { SupportComponent } from './support/support.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav', component: NavbarComponent },
  {path:'signup',component:SignupComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'onboard',component:OnboardComponent},
  {path:'reports',component:ReportsComponent},
  {path:'support',component:SupportComponent}
 
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
