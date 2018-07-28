import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any;
  username= "";
  password="";
  constructor(public http: Http, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    
    
  }

  loadLogin() {
    console.log(this.username + " " + this.password)    
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/token";
    //var link = "http://localhost:8080/uaa/oauth/token"; 
    var data = { username: this.username, password: this.password};
    //var data = { userName:marissa, Password:koala};

var schema = 'client_id=cf&client_secret=&grant_type=password&username=[username]&password=[password]&token_format=jwt&response_type=token'; 
    
    
        schema=schema.replace("[username]",this.username);
        schema=schema.replace("[password]",this.password);  
        console.log(this.username);
       
    let Header = new Headers({
      "Content-Type":"application/x-www-form-urlencoded",
	  "Accept" : "application/json"
    });
    let myHeaders = new Headers();
    
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status)
        if (res.status == 200) {
          alert();
        } else {
          alert("Failed!");
        }
        // var link2 = "http://yahoo.com";
        this.router.navigateByUrl("/dashboard");
        // this.router.navigateByUrl("link2");
      },
      error => {
        alert('Username or password invalid');
        console.log("error object "+JSON.stringify(error.json()));
      }
    );    
  }

  
  }


  