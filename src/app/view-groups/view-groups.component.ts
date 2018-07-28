

import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import axios from "axios";

import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

 @Component({
   selector: 'app-view-groups',
   templateUrl: './view-groups.component.html',
   styleUrls: ['./view-groups.component.css']
 })
export class ViewGroupsComponent implements OnInit {
  public data: any;
  closeResult: string;
  // username= "";
  // email="";
  // password="";
  
  public Groups: any;
  
  // public Users : any;
  
  public get ={'displayName':null, 'description':null, 'zoneId':null, 'origin':null, 'type':null, 'value':null};
  constructor(public http: Http, private modalService: NgbModal, private route : ActivatedRoute, private router : Router) {}
  
  ngOnInit() {
    
    this.loadGroups();

    


    
  }

  loadGroups() {
    let Header = new Headers({
      "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Accept":"application/json"
    });
    let myHeaders = new Headers();
    const head = {
      "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Accept":"application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url:  "https://uaaserver.eu-gb.mybluemix.net/Groups", headers: head })
      .then(response => 
        //console.log(response.data)
        this.Groups = response.data.resources
      )
       .catch(error => console.log(error));

     
  }


loadGroupsById(data:string) {
    let Header = new Headers({
      "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Accept":"application/json"
    });
    const head = {
      "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
      "Accept":"application/json"
    };
    const url = "https://uaaserver.eu-gb.mybluemix.net/Groups" +data;
    let Option = new RequestOptions({ headers: Header });
    axios({ method: "GET", url:  url, headers: head })
      .then(response => 
       console.log(response.data)
       // this.Users = response.data.resources
      )
       .catch(error => console.log(error));

  }





 
  funcDeleteT(id) {
    
    if (confirm("Are you sure you want to delete?")) {    
         //var string = (id);
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups//{groupId}";
        link = link.replace("{id}",id);
        let Header = new Headers({
          "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
          // "Content-Type":"application/json"
        });
        let myHeaders = new Headers();
        
        
        let Option = new RequestOptions({ headers: Header });
    
        // confirm(link);
        this.http.delete(link,Option).subscribe(
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
  }

  else {
    // alert("nooooo")
    }

  }



 // Modal logic
open(content,data) {

  let Header = new Headers({
    "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
    "Accept":"application/json"
  });
  const head = {
    "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
    "Accept":"application/json"
  };
  const url = "https://uaaserver.eu-gb.mybluemix.net/Groups/" +data;
  let Option = new RequestOptions({ headers: Header });
  axios({ method: "GET", url:  url, headers: head })
    .then((response) =>{
     console.log(response.data)
     this.get.displayName = response.data.displayName;
     this.get.description = response.data.description;
     this.get.zoneId = response.data.zoneId;
     this.get.origin = response.data.origin;
     this.get.type = response.data.type;
     this.get.value = response.data.value;
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


  
