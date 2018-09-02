import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";
import "datatables.net";
import "datatables.net-bs4";
import { Subject } from "rxjs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../dataservice/dataservice";
import {Location} from '@angular/common';



import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-view-group-page",
  templateUrl: "./view-group-page.component.html",
  styleUrls: ["./view-group-page.component.css"]
})
export class ViewGroupPageComponent implements OnInit {
  myFunction(): any {
    throw new Error("Method not implemented.");
  }
  public data: any;
  public groupInfoObjects: any;
  closeResult: string;
  public user: any;
  public users: any;
  public groupId3: any;
  public Members: any = {};
  public role_id: any;
  public Users: any;
  
  client_id = "";
  value = "";
  dataTable: any;
  dtTrigger: Subject<any> = new Subject();
  

  public Groups: any;

  

  public get = {
    displayName: null,
    description: null,
    zoneId: null,
    origin: null,
    type: null,
    value: null
  };
  constructor(
    public http: Http,
    
    private route: ActivatedRoute,
    private router: Router,
    public dataservice: DataService,
    private modalService: NgbModal,
    private location: Location,
    
  ) {}


  async ngOnInit() {
    this.groupId3 = this.dataservice.getGroupId();
    await this.fetchGroupInfo(this.dataservice.getGroupId());
    console.log(this.groupId3);
    console.log('i am here to help');
    
  
    this.loadGroups();
    this.loadUsers();
    this.loadUser();
    await this.loadMember(this.dataservice.getGroupId());
    this.load();
    


    
  }
load(){
  this.route.root;
}

  
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
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
     axios({
      method: "GET",
      url: "https://ice.ecobank.com/uaa/Groups",
      headers: head
    })
      .then(
        response =>
          //console.log(response.data)
          (this.Groups = response.data.resources)
      )
      .catch(error => console.log(error));
  }
  loadGroupsById(data: string) {
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Groups" + data;
    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url: url, headers: head })
      .then(
        response => console.log(response.data)
        // this.Users = response.data.resources
      )
      .catch(error => console.log(error));
  }

  funcDeleteT(id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      var link = "https://ice.ecobank.com/uaa/Groups//{groupId}";
      link = link.replace("{id}", id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b"
        // "Content-Type":"application/json"
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

  

  loadUsers() {
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    axios({
      method: "GET",
      url: "https://ice.ecobank.com/uaa/Users",
      headers: head
    })
      .then(
        response =>
          //console.log(response.data)
          (this.Users = response.data.resources)
      )
      .catch(error => console.log(error));
  }

  async fetchGroupInfo(data: any) {
    data = this.groupId3;
    console.log("Inside the place==>"+ data);
    var link = "https://ice.ecobank.com/uaa/Groups/{groupId3}".replace(
      "{groupId3}",
      data
    );
    console.log(link);

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
        console.log("group");
        console.log(this.groupInfoObjects);
      })
      .catch(error => console.log(error));
  }


  // public userid2: any;
  public userId: any;
  public roleId: any;
  // assigning permission to role
  change(event, i, group) {
    console.log("Assigning a user a role");
    this.roleId = this.groupId3;
    this.userId = group.id;
    console.log("user id  new guy" + this.userId);
    console.log("role id " + this.roleId);

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();
  
    let Option = new RequestOptions({ headers: Header });

    if(event.target.checked){
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

  // let Header = new Headers({
  //   Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
  //   "Content-Type": "application/json"
  // });
  // let myHeaders = new Headers();

  // let Option = new RequestOptions({ headers: Header });

  this.http.post(link, schema, Option).subscribe(
    res => {
      console.log(res);
      console.log(res.status);
      if (res.status == 201) {
        alert("User " + this.client_id + " Created Successfully");
      } else {
        alert("Failed!");
      }
    },
    error => {
      console.log("Client_id already created");
      console.log("error object " + JSON.stringify(error.json()));
    }
  );
    }else{
      console.log("About to remove from member from group");
  
  var link =
        "https://ice.ecobank.com/uaa/Groups/{roleId}/members/{userId}";
      link = link.replace("{roleId}", this.roleId)
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
        this.groupId3 = this.users.resources[0].id;
        console.log("Member id " + this.groupId3);
      })
      .catch(error => console.log(error));
  }

  
  //
  async loadUser() {
    console.log("this is it >>>" + this.groupId3);
    //console.log("this is it >>>" + this.route);
    var link =
      "https://ice.ecobank.com/uaa/Groups/{groupId3}/members?returnEntities=true";

    link = link.replace("{groupId3}", this.groupId3);

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

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

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


  public groupId: any;
  public groupId2: any;
  // assigning permission to role
  onChange(event, i, Groups) {
    //console.log("i am here");
    this.groupId2 = this.role_id;
    this.groupId = Groups.id;
    console.log(this.groupId2);
    console.log(this.groupId);
    

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();
    let Option = new RequestOptions({ headers: Header });

    if (event.target.checked) {
      ///
      var link =
        "https://ice.ecobank.com/uaa/Groups/{groupId3}/members";
      link = link.replace("{groupId3}", this.groupId3);
      var data = JSON.stringify({
        value: this.groupId3
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
}
