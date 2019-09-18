import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router/src/router';
import {RouterModule} from "@angular/router";
import { HttpClientModule} from '@angular/common/http';


 
//services
import { UservalidateService} from '../app/services/uservalidate.service';
import { AuthService } from '../app/services/auth.service';
import { AuthGuardService} from './services/auth-guard.service';
import { OrgauthService } from './services/orgauth.service.service';
import { JobserviceService } from './component/Org/dashboard/services/jobservice.service';
import { QbserviceService } from './component/Org/dashboard/services/qbservice.service';
import { CandidateService } from './services/candidate.service';

//modules
import { routes1 } from './app.route';
import {FormsModule, FormGroup, ReactiveFormsModule,FormBuilder, FormControl, Validator} from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages/module';
// import { FontAwesomeModule } from 'font-awesome';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/Layout/navbar/navbar.component';
import { FooterComponent } from './component/Layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/Cand/login/login.component';
import { RegisterComponent } from './component/Cand/register/register.component';
import { DashboardComponent } from './component/Org/dashboard/dashboard.component';

import { QuestionbankComponent } from './component/Org/dashboard/questionbank/questionbank.component';
import { JobformComponent } from './component/Org/dashboard/jobform/jobform.component';
import { ComplainComponent } from './component/Cand/complain/complain.component';
import { TestComponent } from './component/test/test.component';
import { DashitemComponent } from './component/Org/dashboard/Orgdashitem/dashitem.component';
import { UserdashitemComponent } from './component/Org/dashboard/userdashitem/userdashitem.component';
import { ProfileComponent } from './component/Cand/profile/profile.component';
import { ApplicantComponent } from './component/Org/dashboard/applicant/applicant.component';
import { AlljobsComponent } from './component/Org/dashboard/alljobs/alljobs.component';
import { InterviewComponent } from './component/interview/interview.component';
import { JobvComponent } from './component/jobv/jobv.component';
import { HeaderComponent } from './component/header/header.component';
import { HcontentComponent } from './component/hcontent/hcontent.component';
import { ResultComponent } from './component/Org/dashboard/result/result.component';
import { ProfileviewComponent } from './component/Cand/profile/profileview/profileview.component';
import { ProfileeditComponent } from './component/Cand/profile/profileedit/profileedit.component';
import { OrgloginComponent } from './component/Org/orglogin/orglogin.component';
import { OrgregisterComponent } from './component/Org/orgregister/orgregister.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { QuizService } from './services/quiz.service';
import { JobviewComponent } from './component/jobview/jobview.component';
// import {  } from '';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    QuestionbankComponent,
    JobformComponent,
    ComplainComponent,
    TestComponent,
    DashitemComponent,
    UserdashitemComponent,
    ApplicantComponent,
    AlljobsComponent,
    InterviewComponent,
    JobvComponent,
    HeaderComponent,
    HcontentComponent,
    ResultComponent,
    ProfileviewComponent,
    ProfileeditComponent,
    OrgloginComponent,
    OrgregisterComponent,
    WelcomeComponent,
    JobviewComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes1),
    HttpClientModule,
    // AngularFontAwesomeModule
    
  ],
  providers: [
    UservalidateService,
    AuthService,
    AuthGuardService,
    OrgauthService,
    QbserviceService,
    JobserviceService,
    QuizService,
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
