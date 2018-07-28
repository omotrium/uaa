import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";




@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  closeResult: string;
  public data: any;
  displayName= "";
  description="";
  value="";
  type="";
  constructor(public http: Http, private modalService: NgbModal,private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    
    
  }

  loadRole() {
 
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
    var data = JSON.stringify({ displayName: this.displayName, description: this.description,value:this.value,type: this.type});
console.log("value recieved is "+this.value);
const schema = {
  "displayName" : null,
  "description" : null,
  "members" : [ {
    "origin" : "uaa",
    "type" : null,
    "value" : null
  } ]
}

       schema.displayName=this.displayName;
       schema.description=this.description; 
       schema.members[0].value = this.value;
       console.log(this.displayName);
       console.log(this.description);
    let Header = new Headers({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
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
        if (res.status == 201) {
          this.displayName="";
          this.description="";
          this.value="";
          this.type="";
          alert("Role "+this.displayName+" Created Successfully");
        } else {
          alert("Failed!");
        }
       
      },
      error => {
        alert('Client_id already created');
        console.log("error object "+JSON.stringify(error.json()));
      }
    );    
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


  







  





