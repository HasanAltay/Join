import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
// import { MainComponent } from './main/main.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'reset', component: ResetComponent},
  // { path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
