import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public data: any;
  username= "";
  email="";
  password="";
  constructor(public http: Http, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    
    
  }

  loadUser() {
 
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "http://localhost:8080/uaa/Users";
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
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI2OGI1MTdlNzUyNDk0ZmFmYTFhMmE5OWQ3ZmNiMDI0NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTIyMDE5OCwiZXhwIjoxNTMxMjYzMzk4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.slxaohrYVRPljNrTaQ_RUtxINQGpJUDBzijy-7vuRkc",
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

  }


  







  

