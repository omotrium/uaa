import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "view-client-app",
  templateUrl: "./view-client-app.component.html",
  styleUrls: ["./view-client-app.component.css"]
})
export class ViewClientComponent implements OnInit {
  closeResult: string;
  public data: any;
  client_id = "";
  name = "";
  client_secret = "";
  public clients: any;
  public get= {'client_id':null, 'name': null, 'scope':null, 'authorized_grant_types':null, 'autoapprove':null};
  constructor(
    public http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    let Header = new Headers({
      Authorization:
        "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization:
        "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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
      .then(
        response =>
          //console.log(response.data)
          (this.clients = response.data.resources)
      )
      .catch(error => console.log(error));
  }

  loadClientsById(data:string) {
    let Header = new Headers({
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    });
    const head = {
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    };
    const url = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients" +data;
    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url:  url, headers: head })
      .then(response => 
       console.log(response.data)
       // this.Users = response.data.resources
      )
       .catch(error => console.log(error));

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
      Authorization:
        "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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

  funcDeleteT(client_id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
      link = link.replace("{client_id}", client_id);
      let Header = new Headers({
        Authorization: "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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
  open(content,data) {

  let Header = new Headers({
    "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
    "Accept":"application/json"
  });
  const head = {
    "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
    "Accept":"application/json"
  };
  const url = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients" +data;
  let Option = new RequestOptions({ headers: Header });
  axios({ method: "GET", url:  url, headers: head })
    .then((response) =>{
     console.log(response.data)
     this.get.client_id = response.data.client_id;
     this.get.name = response.data.name;
     this.get.scope = response.data.scope;
     this.get.authorized_grant_types = response.data.authorized_grant_types;
     this.get.autoapprove = response.data.autoapprove;
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
  }


  

  
