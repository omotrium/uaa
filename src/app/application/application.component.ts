import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import { DataService } from "../dataservice/dataservice";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"]
})
export class ApplicationComponent {
  closeResult: string;
  public data: any;
  client_id = "";
  name = "";
  client_secret = "";
  scope = "";
  authorized_grant_types = "";
  redirect_uri = "";
  authorities = "";
  public clients: any;
  constructor(
    public http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public dataservice: DataService
  ) {}

  ngOnInit() {
    this.loadClients();
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
      .then(
        response =>
          //console.log(response.data)
          (this.clients = response.data.resources)
      )
      .catch(error => console.log(error));
  }

  loadClient() {
    console.log('heloooooooooooooooo')
  var link = "https://ice.ecobank.com/uaa/oauth/clients";
    var data = JSON.stringify({
      client_id: this.client_id,
      client_secret: this.client_secret,
      name: this.name,
      scope: this.scope,
      authorized_grant_types: this.authorized_grant_types,
      authorities: this.authorities,
      redirect_uri: this.redirect_uri

    });
console.log('amaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
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
    schema.redirect_uri[0] = this.redirect_uri;
    schema.authorized_grant_types[0] = this.authorized_grant_types;
    schema.authorities[0] = this.authorities;
    schema.scope[0] = this.scope;
    console.log(this.client_id);
    console.log(this.name);

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
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
          this.scope = "";
          this.authorized_grant_types = "";
          this.authorities = "";
          this.redirect_uri = "";

          alert("Application" + this.client_id + " Created Successfully");
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  goToApp(data: string) {
    // routerLink ='/view-app'
    console.log("here");
    this.dataservice.setGroupId(data);
    this.router.navigate(["view-app"]);
  }
}
