


import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-client-app',
  templateUrl: './create-client-app.component.html',
  styleUrls: ['./create-client-app.component.css']
})
export class CreateClientAppComponent implements OnInit {
  public data: any;
  client_id= "";
  name="";
  client_secret="";
  constructor(public http: Http, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    
    
  }

  loadClient() {
 
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "http://localhost:8080/uaa/oauth/clients";
    var data = JSON.stringify({ client_id: this.client_id, client_secret: this.client_secret, name:this.name});

const schema = {
   "scope" : [ "clients.read", "clients.write" ],
  "client_id" : null,
  "client_secret" : null,
  "resource_ids" : [ ],
  "authorized_grant_types" : [ "client_credentials" ],
  "redirect_uri" : [ "http://yahoo.com"],
  "authorities" : [ "clients.read", "clients.write" ],
  "token_salt" : "3tjE6d",
  "autoapprove" : true,
  "allowedproviders" : [ "uaa", "ldap", "my-saml-provider" ],
  "name" : null
       }
       schema.client_id=this.client_id;
       schema.name=this.name;
       schema.client_secret=this.client_secret;    
       console.log(this.client_id);
       console.log(this.name);
    let Header = new Headers({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI5Y2IwOTg2MWMyMzY0NTg1YTY2M2YxMWY1NGZjMjQxZCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTQxMzI4MSwiZXhwIjoxNTMxNDU2NDgxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.8OaDQgnvoV3wt9PA3NSyVF-1qFkg5DbxRtyzQJPIdgs",
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
          this.client_id="";
          this.name="";
          this.client_secret="";
          alert("User "+this.client_id+" Created Successfully");
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

  }


  







  


