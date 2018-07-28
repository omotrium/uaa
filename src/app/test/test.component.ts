
import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";


import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-test',
     templateUrl: './test.component.html',
     styleUrls: ['./test.component.css']
   })
export class TestComponent implements OnInit {
  public data: any;
  username= "";
  email="";
  password="";
  closeResult: string;
  public Users : any;
  public get ={'user_id': null,'username': null, 'familyName':null, 'givenName':null,'emails':[],'groups':[]};
  constructor(public http: Http, private modalService: NgbModal, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    this.loadUsers(); 
  }
  updClient(data: string){
    let link ="https://uaaserver.eu-gb.mybluemix.net/Users/{user_id}";
    link = link.replace("{user_id}",data);
   const updLoad = {
      "userName" : this.get.username,
      "name" : {
        "familyName" : this.get.familyName,
        "givenName" : this.get.givenName
      },
      "emails" : [ {
        "value" : this.get.emails[0],
        "primary" : false
      } ],
      "active" : true,
      "verified" : true,
      "origin" : "",
     "password" : null
  
    }
    let Header = new Headers({
      "Authorization": "Bearer 17517284380f4766bf4fcce0a88aa3ab",
      "Content-Type":"application/json",
      "If-Match":"*"
    });
    
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.put(link, updLoad, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status)
        if (res.status === 200) {
          alert("User "+this.get.username+" Updated Successfully");
        }
        // this.router.navigateByUrl("/settings/addaffiliates");
      },
      error => {
        alert('Error Updating User');
        console.log('errroroorororororor');
        console.log("error object "+JSON.stringify(error));
      }
    );    



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





  loadClientsById(data:string) {
    let Header = new Headers({
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    });
    const head = {
      "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
      "Accept":"application/json"
    };
    const url = "https://uaaserver.eu-gb.mybluemix.net/Users" +data;
    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url:  url, headers: head })
      .then(response => 
       console.log(response.data)
       // this.Users = response.data.resources
      )
       .catch(error => console.log(error));

  }

  loadUser() {
 
// funcPost(nameVal, passwordVal, passwordVal)
  //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://uaaserver.eu-gb.mybluemix.net/Users";
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
open(content,data) {

  let Header = new Headers({
    "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
    "Accept":"application/json"
  });
  const head = {
    "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
    "Accept":"application/json"
  };
  const url = "https://uaaserver.eu-gb.mybluemix.net/Users/" +data;
  let Option = new RequestOptions({ headers: Header });
  axios({ method: "GET", url:  url, headers: head })
    .then((response) =>{
     console.log(response.data)
     this.get.familyName = response.data.name.familyName;
     this.get.givenName = response.data.name.givenName;
     this.get.username = response.data.userName;
     this.get.emails = response.data.emails;
     this.get.groups = response.data.groups;
     this.get.user_id = response.data.id;
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


  

  



  

