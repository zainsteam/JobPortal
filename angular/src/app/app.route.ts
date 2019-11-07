import { Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/Cand/login/login.component';
import {RegisterComponent} from './component/Cand/register/register.component';
import {DashboardComponent} from './component/Org/dashboard/dashboard.component';
import { ProfileComponent } from './component/Cand/profile/profile.component';
import { QuestionbankComponent } from './component/Org/dashboard/questionbank/questionbank.component';
import { JobformComponent } from './component/Org/dashboard/jobform/jobform.component';
import { ComplainComponent } from './component/Cand/complain/complain.component';
import { DashitemComponent } from './component/Org/dashboard/Orgdashitem/dashitem.component';
import { UserdashitemComponent } from './component/Org/dashboard/userdashitem/userdashitem.component';
import { ApplicantComponent } from './component/Org/dashboard/applicant/applicant.component';
import { AlljobsComponent } from './component/Org/dashboard/alljobs/alljobs.component';
import { JobvComponent } from './component/jobv/jobv.component';
import { InterviewComponent } from './component/interview/interview.component';
import { ProfileviewComponent } from './component/Cand/profile/profileview/profileview.component';
import { ProfileeditComponent } from './component/Cand/profile/profileedit/profileedit.component';
import { TestComponent } from './component/test/test.component';

import {AuthGuardService} from './services/auth-guard.service';
import { Component } from '@angular/core';
import { OrgregisterComponent } from './component/Org/orgregister/orgregister.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { JobviewComponent } from './component/jobview/jobview.component';
 

export const routes1 : Routes = [
    {path:'', component:HomeComponent},
    {path:'Login', component:LoginComponent},
    {path:'Orgregister', component:OrgregisterComponent},
    {path:'Register', component:RegisterComponent},
    {path:'Job', component:JobvComponent},
    {path:'Interview', component:InterviewComponent,canActivate:[AuthGuardService]},
    {path:'Welcome', component:WelcomeComponent,canActivate:[AuthGuardService]},
    {path:'test', component:TestComponent},
    {path:'Job_view', component:JobviewComponent},
    {path:'Dashboard',component:DashboardComponent,
    children:[
        {path:'Dashboard/jobform',component:JobformComponent},
        {path:'Dashboard/questionbank',component:QuestionbankComponent},
        {path:'',component:DashitemComponent},
        {path:'Dashboard/Orgdashitem',component:DashitemComponent},
        {path:'',component:UserdashitemComponent},
        {path:'Dashboard/userdashitem',component:UserdashitemComponent},
        {path:'Dashboard/applicant',component:ApplicantComponent},
        {path:'Dashboard/alljobs',component:AlljobsComponent}
    ],canActivate:[AuthGuardService]},
     {path:'profile', component:ProfileComponent,
     children:[
         {path:'',component:ProfileviewComponent},
         {path:'profile/profileedit',component:ProfileeditComponent},
         {path:'profile/profileview',component:ProfileviewComponent},
         {path:'profile/complain',component:ComplainComponent},
     ],canActivate:[AuthGuardService]}
]