import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { DataService } from "../dataservice/dataservice";

@Component({
  selector: "app-view-app",
  templateUrl: "./view-app.component.html",
  styleUrls: ["./view-app.component.css"]
})
export class ViewAppComponent {
  public groupInfoObjects: any;
  public permissions: any = {};
  public groups: any = {};
  public member: any;
  public Roles: any = {};
  public Members: any = {};
  closeResult: string;
  public data: any;
  client_id = "";
  displayName = "";
  description = "";
  name = "";
  client_secret = "";
  value = "";
  public clients: any;
  public Groups: any;
  public role_id: any;
  public appId: any = {};
  public users: any = {};
  public applicationId: any;

  roleForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl()
  });
  settingsForm = new FormGroup({
    name: new FormControl(),
    allowedproviders: new FormControl(),
    autoapprove: new FormControl(),
    token_salt: new FormControl(),
    authorities: new FormControl(),
    redirect_uri: new FormControl(),
    authorized_grant_types: new FormControl(),
    resource_ids: new FormControl(),
    client_secret: new FormControl(),
    client_id: new FormControl(),
    scope: new FormControl()
  });
  switchValue = false;

  settingsFormSubmit(): void {
    for (const i in this.settingsForm.controls) {
      this.settingsForm.controls[i].markAsDirty();
      this.settingsForm.controls[i].updateValueAndValidity();
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.roleForm.controls[name];
  }

  submitRoleForm() {
    for (const i in this.roleForm.controls) {
      this.roleForm.controls[i].markAsDirty();
      this.roleForm.controls[i].updateValueAndValidity();
    }
    console.log(this.roleForm.value);
  }

  get f() {
    return this.settingsForm.controls;
  }

  // constructor(private fb: FormBuilder) {}
  public get = {
    displayName: null,
    description: null,
    zoneId: null,
    origin: null,
    type: null,
    value: null,
    givenName: null,
    username: null,
    userName: null,
    user_id: null,
    emails: []
  };
  constructor(
    private fb: FormBuilder,
    public http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public dataservice: DataService
  ) {}

  async ngOnInit() {
    await this.fetchGroupInfo(this.dataservice.getGroupId());
    console.log(this.dataservice.getGroupId());
    this.roleForm = this.fb.group({});
    this.settingsForm = this.fb.group({
      name: "",
      scope: "",
      allowedproviders: "",
      autoapprove: "",
      token_salt: "",
      authorities: "",
      redirect_uri: "",
      authorized_grant_types: "",
      resource_ids: "",
      client_secret: "",
      client_id: ""
    });
    await this.loadGroupInfo(this.dataservice.getGroupId());
    await this.loadGroup(this.dataservice.getGroupId());
    await this.loadMember(this.dataservice.getGroupId());
    await this.loadUsers(this.dataservice.getGroupId());
  }

  loadClients() {
    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    axios({
      method: "GET",
      url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
      headers: head
    })
      .then(response => {
        console.log("oath clients");
        console.log(response.data);
        this.clients = response.data.resources;
      })
      .catch(error => console.log(error));
  }

  // assign funtion
  // load() {
  //   // funcPost(nameVal, passwordVal, passwordVal)
  //   //funcPostT(userNameVal, passwordVal, emailsVal) {
  //   var link = "https://uaaserver.eu-gb.mybluemix.net/Groups/{groupId2}/members";
  //   var data = JSON.stringify({

  //   value: this.value
  //   });

  //   const schema = {
  //     "origin":"uaa",
  //     "type":"GROUP",
  //     "value":"{groupId}"
  //   };
  //   schema.value = this.value

  //   let Header = new Headers({
  //     Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
  //     "Content-Type": "application/json"
  //   });
  //   let myHeaders = new Headers();

  //   // myHeaders.append("Content-Type", "application/json");
  //   // myHeaders.append("Access-Control-Allow-Origin", "*");

  //   let Option = new RequestOptions({ headers: Header });

  //   this.http.post(link, schema, Option).subscribe(
  //     res => {
  //       console.log(res);
  //       console.log(res.status);
  //       if (res.status == 201) {

  //         alert("User " + this.client_id + " Created Successfully");
  //       } else {
  //         alert("Failed!");
  //       }
  //     },
  //     error => {
  //       alert("Client_id already created");
  //       console.log("error object " + JSON.stringify(error.json()));
  //     }
  //   );
  // }

  // id for role in assign modal
  public groupId: any;
  public groupId2: any;
  // assigning permission to role
  onChange(event, i, Groups) {
    //console.log("i am here");
    this.groupId2 = this.role_id;
    this.groupId = Groups.id;
    console.log(this.groupId2);
    console.log(this.groupId);
    console.log(this.permissions);

    ///
    var link =
      "https://uaaserver.eu-gb.mybluemix.net/Groups/{groupId2}/members";
    link = link.replace("{groupId2}", this.groupId2);
    var data = JSON.stringify({
      value: this.groupId
    });

    const schema = {
      origin: "uaa",
      type: "GROUP",
      value: "null"
    };
    schema.value = this.groupId;

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          //alert("User " + this.client_id + " Created Successfully");
        } else {
          alert("Failed!");
        }
      },
      error => {
        alert("Client_id already created");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  // assigning users to role

  // id for role in assign modal
  public user__id: any;
  public userId: any;
  public roleId: any;
  // assigning permission to role
  change(event, i, group) {
    console.log("Assigning a user a role");
    this.userId = this.user__id;
    this.roleId = group.id;
    console.log("user id " + this.userId);
    console.log("role id " + this.roleId);

    ///
    var link =
      "https://uaaserver.eu-gb.mybluemix.net/Groups/{roleId}/members";
    link = link.replace("{roleId}", this.roleId);


    const schema = {
      origin: "uaa",
      type: "USER",
      value: "null"
    };
    schema.value = this.userId;

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
         // alert("User " + this.client_id + " Created Successfully");
        } else {
          alert("Failed!");
        }
      },
      error => {
        alert("Client_id already created");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  loadPermission() {
    // funcPost(nameVal, passwordVal, passwordVal)
    //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
    var data = JSON.stringify({
      displayName: this.displayName,
      description: this.description
    });

    const schema = {
      displayName: "null",
      description: "null"
    };
    schema.displayName = this.displayName;
    schema.description = this.description;

    console.log(this.displayName);
    console.log(this.description);

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.displayName = "";
          this.description = "";

          alert("User " + this.displayName + " Created Successfully");
        } else {
          alert("Failed!");
        }
      },
      error => {
        alert("displayName already created");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  loadClient() {
    // funcPost(nameVal, passwordVal, passwordVal)
    //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
    var data = JSON.stringify({
      client_id: this.client_id,
      client_secret: this.client_secret,
      name: this.name
    });

    const schema = {
      scope: ["clients.read", "clients.write"],
      client_id: null,
      client_secret: null,
      resource_ids: [],
      authorized_grant_types: ["client_credentials"],
      redirect_uri: ["http://yahoo.com"],
      authorities: ["clients.read", "clients.write"],
      token_salt: "3tjE6d",
      autoapprove: true,
      allowedproviders: ["uaa", "ldap", "my-saml-provider"],
      name: null
    };
    schema.client_id = this.client_id;
    schema.name = this.name;
    schema.client_secret = this.client_secret;
    console.log(this.client_id);
    console.log(this.name);

    let Header = new Headers({
      Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.client_id = "";
          this.name = "";
          this.client_secret = "";
          alert("User " + this.client_id + " Created Successfully");
        } else {
          alert("Failed!");
        }
      },
      error => {
        alert("Client_id already created");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  loadRole() {
    // funcPost(nameVal, passwordVal, passwordVal)
    //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
    var data = JSON.stringify({
      displayName: this.displayName,
      description: this.description
    });

    const schema = {
      displayName: "null",
      description: "null"
    };
    schema.displayName = this.displayName;
    schema.description = this.description;

    console.log(this.displayName);
    console.log(this.description);

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.displayName = "";
          this.description = "";

          alert("User " + this.displayName + " Created Successfully");
        } else {
          alert("Failed!");
        }
      },
      error => {
        alert("displayName already created");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  //get all groups
  loadGroups() {
    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    axios({
      method: "GET",
      url: "https://uaaserver.eu-gb.mybluemix.net/Groups",
      headers: head
    })
      .then(response => {
        console.log("groups");
        console.log(response.data);
        this.Groups = response.data.resources;
      })
      .catch(error => console.log(error));
  }

  funcDeleteT(client_id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      var link =
        "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
      link = link.replace("{client_id}", client_id);
      let Header = new Headers({
        Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
        Accept: "application/json"
      });
      let myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Access-Control-Allow-Origin", "*");
      let Option = new RequestOptions({ headers: Header });
      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "201") {
            this.loadClients();
            // alert("User "+this.username+" deleted Successfully");
            // alert(res.json().responseMessage);
          } else {
            this.loadClients();
            alert("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    }
  }

  // Modal logic
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open1(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal" }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  open2(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-member" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  //get user by id before assigning role
  open7(content7, data) {
    
    console.log("Data is ==> " + data);

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    const url =
      "https://uaaserver.eu-gb.mybluemix.net/Users/" + data;

    axios({ method: "GET", url: url, headers: head })
      .then(response => {
        console.log(response.data);
        console.log("before method call");
        console.log("data ==> " + data);
        this.user__id = data;
        this.get.username = response.data.userName;

        this.modalService
          .open(content7, { ariaLabelledBy: "modal-basic-title" })
          .result.then(
            result => {
              this.closeResult = `Closed with: ${result}`;
            },
            reason => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
          );
        // this.Users = response.data.resources
      })
      .catch(error => console.log(error));
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  async fetchGroupInfo(data: any) {
    console.log(data);
    var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}".replace(
      "{client_id}",
      data
    );

    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    await axios({
      method: "GET",
      url: link,
      headers: head
    })
      .then(response => {
        console.log(response);
        this.groupInfoObjects = response.data;
        console.log("client");
        console.log(this.groupInfoObjects);
      })
      .catch(error => console.log(error));
  }

  // app permissions
  async loadGroupInfo(data: any) {
    console.log(data);

    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=description+co+%22{groupid}+permission%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data
    );

    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    await axios({
      method: "GET",
      url: link,
      headers: head
    })
      .then(response => {
        console.log(response);
        this.permissions = response.data;
        console.log("permissions");
        console.log(this.permissions);
      })
      .catch(error => console.log(error));
  }

  // app roles
  async loadGroup(data: any) {
    console.log(data);

    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=displayName+sw+%22{groupid}%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data
    );

    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    await axios({
      method: "GET",
      url: link,
      headers: head
    })
      .then(response => {
        console.log(response);
        console.log("Roles");
        this.Roles = response.data.resources;
        console.log(this.Roles);
      })
      .catch(error => console.log(error));
  }

  //app members' group
  async loadMember(data: any) {
    console.log(data);

    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=displayName+sw+%22{groupid}.user%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data
    );

    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    await axios({
      method: "GET",
      url: link,
      headers: head
    })
      .then(response => {
        console.log(response);
        console.log("Members");
        this.users = response.data;
        //console.log(this.Members.resources[0].id);
        this.appId = this.users.resources[0].id;
        console.log("Member id " + this.appId);
      })
      .catch(error => console.log(error));
  }

  // get members of an app
  async loadUsers(applicationId: any) {
    applicationId = this.appId;
    console.log(applicationId);

    var link =
      "https://uaaserver.eu-gb.mybluemix.net/Groups/{applicationId}/members?returnEntities=true";

    link = link.replace("{applicationId}", applicationId);

    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    await axios({
      method: "GET",
      url: link,
      headers: head
    })
      .then(response => {
        //console.log(response);
        console.log("users");
        this.Members = response.data;
        console.log(this.Members);
      })
      .catch(error => console.log(error));
  }

  // loadGroup() {
  //   let Header = new Headers({
  //     "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
  //     "Accept":"application/json"
  //   });
  //   let myHeaders = new Headers();
  //   const head = {
  //     "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
  //     "Accept":"application/json"
  //   };
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Access-Control-Allow-Origin", "*");

  //   let Option = new RequestOptions({ headers: Header });
  //   axios({ method: "GET", url:  "https://uaaserver.eu-gb.mybluemix.net/Groups", headers: head })
  //     .then(response =>
  //       //console.log(response.data)
  //       this.Groups = response.data.resources
  //     )
  //      .catch(error => console.log(error));

  // }

  open4(content, data) {
    console.log("am here");

    let Header = new Headers({
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
      Accept: "application/json"
    };
    const url = "https://uaaserver.eu-gb.mybluemix.net/Groups/" + data;

    console.log("before method call");
    console.log("data ==> " + data);
    this.role_id = data;
    //console.log("data ==> " + this.role_id);
    console.log("final url  ==> " + url);
    axios({ method: "GET", url: url, headers: head })
      .then(response => {
        console.log(response.data);
        this.get.displayName = response.data.displayName;
        this.modalService
          .open(content, { ariaLabelledBy: "modal-basic-title" })
          .result.then(
            result => {
              this.closeResult = `Closed with: ${result}`;
            },
            reason => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
          );
        // this.Users = response.data.resources
      })
      .catch(error => console.log("fatal error occured " + error));
  }

  // modal open for assign users
}
