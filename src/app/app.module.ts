import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { InfoComponent } from './info/info.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';
import { SigntopbarComponent } from './signtopbar/signtopbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    NavigationComponent,
    TopbarComponent,
    SummaryComponent,
    BoardComponent,
    AddtaskComponent,
    ContactsComponent,
    PrivacyComponent,
    ImprintComponent,
    InfoComponent,
    ForgotComponent,
    SignupComponent,
    ResetComponent,
    LoginComponent,
    SigntopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
