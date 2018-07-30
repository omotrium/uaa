import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  closeResult: string;
  username= "";
  email="";
  password="";
  public Users : any;
  
  constructor(public http: Http, private modalService: NgbModal, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    this.loadUsers(); 
  }

  loadUsers() {
    let Header = new Headers({
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    });
    let myHeaders = new Headers();
    const head = {
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url:  "https://uaaserver.eu-gb.mybluemix.net/Users", headers: head })
      .then(response => 
       //console.log(response.data)
        this.Users = response.data.resources
      )
       .catch(error => console.log(error));

     
  }







  loadUser() {
 
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/uaa/Users";
    var data = JSON.stringify({ userName: this.username, Password: this.password, emails:this.email});

const schema = {
  "userName" : null,
  
  "emails" : [ {
    "value" : null,
    "primary" : true
  } ],
  
  "active" : true,
  "verified" : true,
  "origin" : "",
  "password" : null,
  "schemas" : [ "urn:scim:schemas:core:1.0" ]
       }
       schema.userName=this.username;
       schema.emails[0].value=this.email;
       schema.password=this.password;    
       console.log(this.username);
       console.log(this.email);
    let Header = new Headers({
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Content-Type":"application/json"
    });
    let myHeaders = new Headers();
    
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status)
        if (res.status === 201) {
          this.username="";
          this.email="";
          this.password="";
          alert("User "+this.username+" Created Successfully");
        }
        // this.router.navigateByUrl("/settings/addaffiliates");
      },
      error => {
        alert('User already created');
        console.log('errroroorororororor');
        console.log("error object "+JSON.stringify(error.json()));
      }
    );    
  }


  funcDeleteT(id) {
    
    if (confirm("Are you sure you want to delete?")) {    
         //var string = (id);
        var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{id}";
        link = link.replace("{id}",id);
        let Header = new Headers({
          "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
          "Content-Type":"application/json"
        });
        let myHeaders = new Headers();
        
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
    
        let Option = new RequestOptions({ headers: Header });
    
        // confirm(link);
        this.http.delete(link,Option).subscribe(
          res => {
            console.log(res.json().responseCode);
    
            if (res.json().responseCode == "201") {
              this.loadUsers();
              // alert("User "+this.username+" deleted Successfully");
              // alert(res.json().responseMessage);
            } else {
              this.loadUsers();
              alert("Deleted Successfully!");
            }
          },
          error => {
            console.log(JSON.stringify(error.json()));
          }
        );    
  }

  else {
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



