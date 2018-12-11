import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { ConfirmCourseDeletionPageComponent } from './confirm-course-deletion-page/confirm-course-deletion-page.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { EditConsultationPageComponent } from './edit-consultation-page/edit-consultation-page.component';
import { ConfirmConsultationDeletionPageComponent } from './confirm-consultation-deletion-page/confirm-consultation-deletion-page.component';
import { AddConsultationPageComponent } from './add-consultation-page/add-consultation-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { ConfirmUserDeletionPageComponent } from './confirm-user-deletion-page/confirm-user-deletion-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'consultation',
    component: ConsultationListComponent
  },
  {
    path: 'user',
    component: UserDetailsPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'course/:courseNo/edit',
    component: EditCoursePageComponent
  },
  {
    path: 'course/:courseNo/confirm-delete',
  component: ConfirmCourseDeletionPageComponent
  },
  {
    path: 'consultation/:consultationNo/edit',
    component: EditConsultationPageComponent
  },
  {
    path: 'consultation/:consultationNo/confirm-delete',
  component: ConfirmConsultationDeletionPageComponent
  },
   {
    path: 'user/edit',
    component: EditUserPageComponent
  },
  {
    path: 'user/confirm-delete',
  component: ConfirmUserDeletionPageComponent
  },
  {
    path: 'course/add',
    component: AddCoursePageComponent
  },
  {
    path: 'consultation/add',
    component: AddConsultationPageComponent
  },
  {
    path: 'user/add',
    component: AddUserPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContainerComponent,
    HomePageComponent,
    SignInPageComponent,
    CourseListComponent,
    EditCoursePageComponent,
    ConfirmCourseDeletionPageComponent,
    ConsultationListComponent,
    EditConsultationPageComponent,
    ConfirmConsultationDeletionPageComponent,
    AddConsultationPageComponent,
    AddCoursePageComponent,
    AddUserPageComponent,
    UserDetailsPageComponent,
    ConfirmUserDeletionPageComponent,
    EditUserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
