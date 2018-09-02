// import { Component, OnInit } from "@angular/core";
// import { Http, Headers, RequestOptions } from "@angular/http";
// import axios from "axios";
// import "datatables.net";
// import "datatables.net-bs4";
// import { Subject } from "rxjs";
// import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";


import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
// import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
import "datatables.net";
import "datatables.net-bs4";
import { Subject } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../dataservice/dataservice";




@Component({
  selector: "app-view-groups",
  templateUrl: "./view-groups.component.html",
  styleUrls: ["./view-groups.component.css"]
})
export class ViewGroupsComponent implements OnInit {
  public data: any;
  closeResult: string;
  public user: any;
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
    public dataservice: DataService
  ) {}

  // ngOnInit() {
  //   this.loadGroups();
  // }
  async ngOnInit() {
    let data = await this.loadGroups();
    this.dtTrigger.next();
  }

  async loadGroups() {
    
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
     await axios({
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
      var link = "https://ice.ecobank.com/uaa/Groups/{groupId}";
      link = link.replace("{groupId}", id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        "Content-Type":"application/json"
      });
      console.log('am herrrrrrrrr')
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

  

  goToGroup(data: string) {
    // routerLink ='/view-app'
    console.log("here");
    this.dataservice.setGroupId(data);
    this.router.navigate(["view-group-page"]);
  }
}
