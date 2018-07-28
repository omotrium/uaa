import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateComponent } from './create/create.component';
import { AssignComponent } from './assign/assign.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateClientAppComponent } from './create-client-app/create-client-app.component';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewClientComponent } from './view-client-app/view-client-app.component';
import { FooterComponent } from './footer/footer.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AdminComponent } from './admin/admin.component';
import { ViewGroupsComponent } from './view-groups/view-groups.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { GroupsComponent } from './groups/groups.component';
import { TestComponent } from './test/test.component';
//import { AlertsModule } from 'angular-alert-module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'groups', component:GroupsComponent  },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'assign', component: AssignComponent },
  { path: 'create-role', component: CreateRoleComponent },
  { path: 'create-client-app', component: CreateClientAppComponent },
  { path: 'view-client-app',component:ViewClientComponent},
  { path: 'view-users', component:ViewUsersComponent},
  { path: 'add-role', component:AddRoleComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'view-groups', component:ViewGroupsComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'users', component:UsersComponent},
  { path: 'clients', component:ClientsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    UserProfileComponent,
    CreateComponent,
    AssignComponent,
    CreateRoleComponent,
    CreateClientAppComponent,
    ViewClientComponent,
    FooterComponent,
    ViewUsersComponent,
    AddRoleComponent,
    AdminComponent,
    ViewGroupsComponent,
    DashboardComponent,
    UsersComponent,
    ChangePasswordComponent,
    ClientsComponent,
    GroupsComponent,
    TestComponent
  ],
  imports: [
    [HttpModule],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //AlertsModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
