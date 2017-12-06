import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MatCardModule } from '@angular/material';
//angularfire2 imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { StudentSignupComponent } from './components/student/student-signup/student-signup.component';
import { ProjectProviderLoginComponent } from './components/project-provider/project-provider-login/project-provider-login.component';
import { ProjectProviderSignupComponent } from './components/project-provider/project-provider-signup/project-provider-signup.component';
import { HomeComponent } from './components/home/home.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { ProjectProviderDetailsComponent } from './components/project-provider/project-provider-details/project-provider-details.component';
import { ProjectProviderDashboardComponent } from './components/project-provider/project-provider-dashboard/project-provider-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

//services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { StudentService } from './services/student.service';
import { ProjectProviderService } from './services/project-provider.service';
import { ProjectProviderPostComponent } from './components/project-provider/project-provider-post/project-provider-post.component';
import { ProjectDetailsComponent } from './components/student/project-details/project-details.component';
import { StudentsDataComponent } from './components/project-provider/students-data/students-data.component';
import { ProjectProviderRequestComponent } from './components/project-provider/project-provider-request/project-provider-request.component';
import { ProjectRequestDetailsComponent } from './components/project-provider/project-request-details/project-request-details.component';
import { ProjectProviderBestmatchComponent } from './components/project-provider/project-provider-bestmatch/project-provider-bestmatch.component';


const appRoutes: Routes = [
  //extra
  { path: 'student-dashboard', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'student-details', component: StudentDetailsComponent, canActivate: [AuthGuard] },
  { path: 'student-data/:id', component: StudentsDataComponent, canActivate: [AuthGuard] },
  { path: 'student-signup', component: StudentSignupComponent, },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'project-provider-login', component: ProjectProviderLoginComponent },
  { path: 'project-provider-dashboard', component: ProjectProviderDashboardComponent, canActivate: [AuthGuard] },
  { path: 'project-provider-signup', component: ProjectProviderSignupComponent, },
  { path: 'project-provider-details', component: ProjectProviderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'project-provider-post', component: ProjectProviderPostComponent, canActivate: [AuthGuard] },
  { path: 'project-details/:id', component: ProjectDetailsComponent, canActivate: [AuthGuard] },
  { path: 'project-provider-request', component: ProjectProviderRequestComponent, canActivate: [AuthGuard] },
  { path: 'project-request-details/:id', component: ProjectRequestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'project-request-bestmatch', component: ProjectProviderBestmatchComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const firebaseConfig = {
  apiKey: "AIzaSyBIZ8bq0mljvKBCvp6MUxwz4DI-_T70tmk",
  authDomain: "profinder-2a8df.firebaseapp.com",
  databaseURL: "https://profinder-2a8df.firebaseio.com",
  storageBucket: "profinder-2a8df.appspot.com",
  messagingSenderId: "881093108838"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    ProjectProviderLoginComponent,
    ProjectProviderSignupComponent,
    HomeComponent,
    StudentDetailsComponent,
    ProjectProviderDetailsComponent,

    ProjectProviderDashboardComponent,
    StudentDashboardComponent,
    ProjectProviderPostComponent,
    ProjectDetailsComponent,
    StudentsDataComponent,
    ProjectProviderRequestComponent,
    ProjectRequestDetailsComponent,
    ProjectProviderBestmatchComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatTooltipModule, 
    MatCardModule
  ],

  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    ProjectProviderService,
    StudentService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
