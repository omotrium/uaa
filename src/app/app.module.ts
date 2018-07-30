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

import { ApplicationComponent } from "./application/application.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { ViewAppComponent } from "./view-app/view-app.component";
import { FormComponent } from "./form/form.component";
//import { AlertsModule } from 'angular-alert-module';

registerLocaleData(en);
const routes: Routes = [
  { path: "login", component: LoginComponent },
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
    FormComponent
  ],
  imports: [
    [HttpModule],
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
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

  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
