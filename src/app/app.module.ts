import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CreateComponent } from "./create/create.component";
import { AssignComponent } from "./assign/assign.component";
import { CreateRoleComponent } from "./create-role/create-role.component";
import { CreateClientAppComponent } from "./create-client-app/create-client-app.component";
import { Http, HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewClientComponent } from "./view-client-app/view-client-app.component";
import { FooterComponent } from "./footer/footer.component";
import { ViewUsersComponent } from "./view-users/view-users.component";
import { AddRoleComponent } from "./add-role/add-role.component";
import { AdminComponent } from "./admin/admin.component";
import { ViewGroupsComponent } from "./view-groups/view-groups.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./users/users.component";
import { ClientsComponent } from "./clients/clients.component";
import { GroupsComponent } from "./groups/groups.component";
import { TestComponent } from "./test/test.component";
import { DataTablesModule } from "angular-datatables";

import { ApplicationComponent } from "./application/application.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { ViewAppComponent } from "./view-app/view-app.component";
import { DataService } from "./dataservice/dataservice";
import { AngularWayComponent } from "./angular-way/angular-way.component";
import { ViewGroupPageComponent } from './view-group-page/view-group-page.component';
import { StaffComponent } from './staff/staff.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DepartmentComponent } from './department/department.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { PermissionComponent } from './permission/permission.component';
import { RoleComponent } from './role/role.component';
import { ApplicationClientComponent } from './application-client/application-client.component';
import { ApplicationUserComponent } from './application-user/application-user.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { AuthenticationTypeComponent } from './authentication-type/authentication-type.component';
import { ViewInternalComponent } from './view-internal/view-internal.component';
import { ViewExternalComponent } from './view-external/view-external.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TestingComponent } from './testing/testing.component';


//import { AlertsModule } from 'angular-alert-module';

registerLocaleData(en);
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "staff", component:  StaffComponent },
  { path: "testing", component:  TestingComponent },

  { path: "view-internal", component:  ViewInternalComponent },
  { path: "view-external", component:  ViewExternalComponent},
  { path: "user-detail", component:  UserDetailComponent},
  

  { path: "application-user", component:  ApplicationUserComponent },
  { path: "applications", component:  ApplicationsComponent },
  { path: "role-permision", component:  RolePermissionComponent },
  { path: "authentication-type", component:  AuthenticationTypeComponent },
  { path: "department", component:  DepartmentComponent },
  { path: "organisation", component:  OrganisationComponent },
  { path: "user-type", component:  UserTypeComponent },
  { path: "permission", component:  PermissionComponent },
  { path: "role", component:  RoleComponent },
  { path: "application-client", component:  ApplicationClientComponent },

  { path: "view-group-page", component:  ViewGroupPageComponent },
  { path: "angular-way", component: AngularWayComponent },
  { path: "test", component: TestComponent },
  { path: "application", component: ApplicationComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "groups", component: GroupsComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "groups", component: GroupsComponent },
  { path: "create", component: CreateComponent },
  { path: "assign", component: AssignComponent },
  { path: "create-role", component: CreateRoleComponent },
  { path: "create-client-app", component: CreateClientAppComponent },
  { path: "view-client-app", component: ViewClientComponent },
  { path: "view-users", component: ViewUsersComponent },
  { path: "add-role", component: AddRoleComponent },
  { path: "admin", component: AdminComponent },
  { path: "view-groups", component: ViewGroupsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "clients", component: ClientsComponent },
  { path: "view-app", component: ViewAppComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
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
    TestComponent,
    ApplicationComponent,
    ViewAppComponent,
    AngularWayComponent,
    ViewGroupPageComponent,
    StaffComponent,
    ApplicationsComponent,
    DepartmentComponent,
    OrganisationComponent,
    UserTypeComponent,
    PermissionComponent,
    RoleComponent,
    ApplicationClientComponent,
    ApplicationUserComponent,
    RolePermissionComponent,
    AuthenticationTypeComponent,
    ViewInternalComponent,
    ViewExternalComponent,
    UserDetailComponent,
    TestingComponent
    
  ],
  imports: [
    [HttpModule],
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgZorroAntdModule
    
  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
