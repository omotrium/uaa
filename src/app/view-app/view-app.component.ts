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
  scope = "";
  authorized_grant_types = "";
  redirect_uri = "";
  authorities = "";
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
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    axios({
      method: "GET",
      url: "https://ice.ecobank.com/uaa/oauth/clients",
      headers: head
    })
      .then(response => {
        console.log("oath clients");
        console.log(response.data);
        this.clients = response.data.resources;
      })
      .catch(error => console.log(error));
  }

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

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();
    let Option = new RequestOptions({ headers: Header });

    if (event.target.checked) {
      ///
      var link =
        "https://ice.ecobank.com/uaa/Groups/{groupId2}/members";
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

      this.http.post(link, schema, Option).subscribe(
        res => {
          console.log(res);
          console.log(res.status);
          if (res.status == 201) {
            //alert("User " + this.client_id + " Created Successfully");
          } 
        },
        error => {
          alert(
            error.status +
              " " +
              error.json().error +
              "\n" +
              error.json().error_description
          );
          console.log("error object " + JSON.stringify(error.json()));
        }
      );
    } else {
      console.log("About to remove from member from group");

      var link =
        "https://ice.ecobank.com/uaa/Groups/{groupId2}/members/{groupId}";
      link = link
        .replace("{groupId2}", this.groupId2)
        .replace("{groupId}", this.groupId);

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
          } else {
            console.log("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    }
  }

  // assign permission to user
  //public user__id: any;
  //public userId: any;
  // assigning permission to role
  changer(event, i, Groups) {
    console.log("Changer");
    this.groupId2 = Groups.id;
    this.groupId = this.user__id;
    console.log(this.groupId2);
    console.log(this.groupId);
    console.log(this.permissions);

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();
    let Option = new RequestOptions({ headers: Header });

    if (event.target.checked) {
      ///
      var link =
        "https://ice.ecobank.com/uaa/Groups/{groupId2}/members";
      link = link.replace("{groupId2}", this.groupId2);
      var data = JSON.stringify({
        value: this.groupId
      });

      const schema = {
        origin: "uaa",
        type: "USER",
        value: "null"
      };
      schema.value = this.groupId;

      this.http.post(link, schema, Option).subscribe(
        res => {
          console.log(res);
          console.log(res.status);
          if (res.status == 201) {
            //alert("User " + this.client_id + " Created Successfully");
          } 
        },
        error => {
          alert(
            error.status +
              " " +
              error.json().error +
              "\n" +
              error.json().error_description
          );
          console.log("error object " + JSON.stringify(error.json()));
        }
      );
    } else {
      console.log("About to remove permission from user");

      var link =
        "https://ice.ecobank.com/uaa/Groups/{groupId2}/members/{groupId}";
      link = link
        .replace("{groupId2}", this.groupId2)
        .replace("{groupId}", this.groupId);

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
          } else {
            console.log("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    }
  }

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

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    let Option = new RequestOptions({ headers: Header });

    if (event.target.checked) {
      ///
      var link =
        "https://ice.ecobank.com/uaa/Groups/{roleId}/members";
      link = link.replace("{roleId}", this.roleId);

      const schema = {
        origin: "uaa",
        type: "USER",
        value: "null"
      };
      schema.value = this.userId;

      this.http.post(link, schema, Option).subscribe(
        res => {
          console.log(res);
          console.log(res.status);
          if (res.status == 201) {
            // alert("User " + this.client_id + " Created Successfully");
          } 
        },
        error => {
          alert(
            error.status +
              " " +
              error.json().error +
              "\n" +
              error.json().error_description
          );
          console.log("error object " + JSON.stringify(error.json()));
        }
      );
    } else {
      console.log("About to remove from member from group");

      var link =
        "https://ice.ecobank.com/uaa/Groups/{roleId}/members/{userId}";
      link = link
        .replace("{roleId}", this.roleId)
        .replace("{userId}", this.userId);

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
          } else {
            console.log("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    }
  }

  loadPermission() {
    var link = "https://ice.ecobank.com/uaa/Groups";
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
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.displayName = "";
          this.description = "";

          this.loadGroups();
        
          alert("Permission Created Successfully");
        } 
      },
      error => {
        alert(
          error.status +
            " " +
            error.json().error +
            "\n" +
            error.json().error_description
        );
        
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  loadClient() {
    var link = "https://ice.ecobank.com/uaa/oauth/clients";
    var data = JSON.stringify({
      client_id: this.client_id,
      client_secret: this.client_secret,
      name: this.name,
      scope: this.scope,
      authorized_grant_types: this.authorized_grant_types,
      redirect_uri: this.redirect_uri,
      authorities: this.authorities
    });

    const schema = {
      scope: [],
      client_id: null,
      client_secret: null,
      resource_ids: [],
      authorized_grant_types: [],
      redirect_uri: [],
      authorities: [],
      token_salt: "3tjE6d",
      autoapprove: true,
      allowedproviders: ["uaa", "ldap", "my-saml-provider"],
      name: null
    };
    schema.client_id = this.client_id;
    schema.name = this.name;
    schema.client_secret = this.client_secret;
    schema.scope[0].value = this.scope;
    schema.authorized_grant_types[0].value = this.authorized_grant_types;
    schema.redirect_uri[0].value = this.redirect_uri;
    schema.authorities[0].value = this.authorities;
    console.log(this.client_id);
    console.log(this.name);

    let Header = new Headers({
      Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.client_id = "";
          this.name = "";
          this.client_secret = "";
          alert("Client " + this.client_id + " Created Successfully");
        } 
      },
      error => {
        alert(
          error.status +
            " " +
            error.json().error +
            "\n" +
            error.json().error_description
        );
        
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  loadRole() {
    var link = "https://ice.ecobank.com/uaa/Groups";
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
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.displayName = "";
          this.description = "";

          this.loadGroups();

          alert("Role Created Successfully");
        } 
      },
      error => {
        alert(
          error.status +
            " " +
            error.json().error +
            "\n" +
            error.json().error_description
        );
        
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  //get all groups
  loadGroups() {
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };

    let Option = new RequestOptions({ headers: Header });
    axios({
      method: "GET",
      url: "https://ice.ecobank.com/uaa/Groups",
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
        "https://ice.ecobank.com/uaa/oauth/clients/{client_id}";
      link = link.replace("{client_id}", client_id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        Accept: "application/json"
      });
      let myHeaders = new Headers();

      let Option = new RequestOptions({ headers: Header });

      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "201") {
            this.loadClients();
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

  //delete a permission

  DeleteT(groupId) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      var link = "https://ice.ecobank.com/uaa/Groups//{groupId}";
      link = link.replace("{groupId}", groupId);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        "Content-Type": "application/json"
      });
      let myHeaders = new Headers();

      let Option = new RequestOptions({ headers: Header });

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "201") {
            this.loadGroups();
            // alert("User "+this.username+" deleted Successfully");
            // alert(res.json().responseMessage);
          } else {
            this.loadGroups();
            alert("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    } else {
      // alert("nooooo")
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
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Users/" + data;

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

  //assign user to permission

  open8(content8, data) {
    console.log("Data is ==> " + data);

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Users/" + data;

    axios({ method: "GET", url: url, headers: head })
      .then(response => {
        console.log(response.data);
        console.log("before method call");
        console.log("data ==> " + data);
        this.user__id = data;
        this.get.username = response.data.userName;

        this.modalService
          .open(content8, { ariaLabelledBy: "modal-basic-title" })
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
    var link = "https://ice.ecobank.com/uaa/oauth/clients/{client_id}".replace(
      "{client_id}",
      data
    );

    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
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

    var link = "https://ice.ecobank.com/uaa/Groups?filter=description+co+%22{groupid}+permission%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data  
    );

    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };

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

    var link = "https://ice.ecobank.com/uaa/Groups?filter=displayName+sw+%22{groupid}%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data
    );

    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };

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

    var link = "https://ice.ecobank.com/uaa/Groups?filter=displayName+sw+%22{groupid}.user%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace(
      "{groupid}",
      data
    );

    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };

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
      "https://ice.ecobank.com/uaa/Groups/{applicationId}/members?returnEntities=true";

    link = link.replace("{applicationId}", applicationId);

    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };

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

  open4(content, data) {
    console.log("am here");

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Groups/" + data;

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


  // DELETE A ROLE OR PERMISSION
  funcDeleteTh(id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      //id=this.role_id;
      console.log("fffffffffffff" + id);
      var link = "https://ice.ecobank.com/uaa/Groups/{groupId}";
      link = link.replace("{groupId}", id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        "Content-Type": "application/json"
      });
      console.log("am herrrrrrrrr");
      //let myHeaders = new Headers();

      let Option = new RequestOptions({ headers: Header });

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
            this.loadGroups();
            // alert("User "+this.username+" deleted Successfully");
            // alert(res.json().responseMessage);
          } else {
            this.loadGroups();
            alert("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    } else {
      // alert("nooooo")
    }
  }

  //DELETE A MEMBER FROM A GROUP

  DelMember(id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      //id=this.role_id;
      console.log("fffffffffffff" + id);
      var link = "https://ice.ecobank.com/uaa/Groups/{roleId}/members/{id}";
      link = link.replace("{roleId}", this.roleId);
      link = link.replace("{id}", this.userId);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        "Content-Type": "application/json"
      });
      console.log("am herrrrrrrrr");
      //let myHeaders = new Headers();

      let Option = new RequestOptions({ headers: Header });

      // confirm(link);
      this.http.delete(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
            this.loadGroups();
            // alert("User "+this.username+" deleted Successfully");
            // alert(res.json().responseMessage);
          } else {
            this.loadGroups();
            alert("Deleted Successfully!");
          }
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    } else {
      // alert("nooooo")
    }
  }

  

  updClient(data: string) {
    console.log("am heeeeeeeeee");
    console.log(":::: " + data);
    let link =
      "https://ice.ecobank.com/uaa/oauth/clients/{client_id}";
    link = link.replace("{client_id}", data);
    const updLoad = {
      scope: this.groupInfoObjects.scope,
      client_id: this.groupInfoObjects.client_id,
      // client_secret: this.groupInfoObjects.client_secret,
      resource_ids: this.groupInfoObjects.resource_ids,
      authorized_grant_types: this.groupInfoObjects.authorized_grant_types,
      redirect_uri: this.groupInfoObjects.redirect_uri,
      // authorities: [],
      // token_salt: "",
      autoapprove: true,
      allowedproviders: ["uaa", "ldap", "my-saml-provider"],
      name: this.groupInfoObjects.name
    };
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.put(link, updLoad, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          alert(" Updated Successfully");
        }
        // this.router.navigateByUrl("/settings/addaffiliates");
      },
      error => {
        alert("Error Updating client");
        console.log("errroroorororororor");
        console.log("error object " + JSON.stringify(error));
      }
    );
  }
}
