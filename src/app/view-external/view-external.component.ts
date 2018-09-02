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

@Component({
  selector: "app-view-external",
  templateUrl: "./view-external.component.html",
  styleUrls: ["./view-external.component.css"]
})
export class ViewExternalComponent implements OnInit {
  public data: any;
  
  username = "";
  email = "";
  password = "";
  closeResult: string;
  dataTable: any;
  dtTrigger: Subject<any> = new Subject();
  public Users: any;
  public myHeaders: any;
  public get = {
    user_id: null,
    username: null,
    familyName: null,
    givenName: null,
    origin: null,
    emails: [],
    groups: []
  };
  constructor(public http: Http, private modalService: NgbModal) {}

  async ngOnInit() {
    let data = await this.loadUsers();
  
    this.dtTrigger.next();
    
  }

  updClient(data: string) {
    let link = "https://ice.ecobank.com/uaa/Users/{user_id}";

    link = link.replace("{user_id}", data);
    const updLoad = {
      userName: this.get.username,
      name: {
        familyName: this.get.familyName,
        givenName: this.get.givenName
      },
      emails: [
        {
          value: this.get.emails[0].value,
          primary: false
        }
      ],
      active: true,
      verified: false,
      origin: "uaa",
      password: null,
      schemas: ["urn:scim:schemas:core:1.0"]
    };

    let Header = new Headers({
     // Authorization: "Bearer b0738afb0b244dd5b5db862fa540aa2b",
     // "Content-Type": "application/json",
     // Accept: "application/json",
      "If-Match": "",
      "Authorization": "Bearer b0738afb0b244dd5b5db862fa540aa2b"
    });

    //Header.append("If-Match", "*");
    //Header.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.put(link, updLoad, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          alert("User " + this.get.username + " Updated Successfully");
        }
      },
      error => {
        alert("Error Updating User");

        console.log("error object " + JSON.stringify(error));
      }
    );
  }
  async loadUsers() {
    
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    await axios({
      method: "GET",
      //url: "https://ice.ecobank.com/uaa/Users",
      url: "https://ice.ecobank.com/uaa/Users?filter=origin+eq+%22uaa%22&sortOrder=ascending&startIndex=1",
      //url: "https://ice.ecobank.com/uaa/Users?filter=origin+eq+%22ldap%22&count=50&sortOrder=ascending&startIndex=1",
      headers: head
    })
      .then(
        response =>
          //console.log(response.data)
          (this.Users = response.data.resources)
      )
      .catch(error => console.log(error));
  }

  
  

  loadClientsById(data: string) {
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Users" + data;
    //const url = "http://localhost:8080/uaa/Users" + data;
    axios({ method: "GET", url: url, headers: head })
      .then(
        response => console.log(response.data)
        // this.Users = response.data.resources
      )
      .catch(error => console.log(error));
  }

  loadUser() {
    // funcPost(nameVal, passwordVal, passwordVal)
    //funcPostT(userNameVal, passwordVal, emailsVal) {

    var link = "https://ice.ecobank.com/uaa/Users";

    //var link = "http://localhost:8080/uaa/Users";

    const schema = {
      userName: null,

      emails: [
        {
          value: null,
          primary: true
        }
      ],

      active: true,
      verified: true,
      origin: "",
      password: null,
      schemas: ["urn:scim:schemas:core:1.0"]
    };
    schema.userName = this.username;
    schema.emails[0].value = this.email;
    schema.password = this.password;
    console.log(this.username);
    console.log(this.email);
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status === 201) {
          this.username = "";
          this.email = "";
          this.password = "";
          alert("User " + this.username + " Created Successfully");
        }
        // this.router.navigateByUrl("/settings/addaffiliates");
      },
      error => {
        alert("User already created");
        console.log("errroroorororororor");
        console.log("error object " + JSON.stringify(error.json()));
      }
    );
  }

  // UNLOCK A USER

  unlockUser(data: string) {
    let link = "https://ice.ecobank.com/uaa/Users/{user_id}/status";
    //let link = "http://localhost:8080/uaa/Users/{user_id}/status";
    link = link.replace("{user_id}", data);
    const updLoad = {
      locked: false
    };
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });

    this.http.patch(link, updLoad, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          alert("User unlocked Successfully");
        }
        // this.router.navigateByUrl("/settings/addaffiliates");
      },
      error => {
        alert("Error Unlocking User");

        console.log("error object " + JSON.stringify(error));
      }
    );
  }

  funcDeleteT(id) {
    if (confirm("Are you sure you want to delete?")) {
      //var string = (id);
      var link = "https://ice.ecobank.com/uaa/Users/{id}";
      // var link = "http://localhost:8080/uaa/Users/{id}";
      link = link.replace("{id}", id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        "Content-Type": "application/json"
      });

      // myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Access-Control-Allow-Origin", "*");

      let Option = new RequestOptions({ headers: Header });

      // confirm(link);
      this.http.delete(link, Option).subscribe(
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
    } else {
      // alert("nooooo")
    }
  }
  // VERIFICATION METHOD
  verify(id) {
    if (confirm("Are you sure you want to verify user?")) {
      var link = "https://ice.ecobank.com/uaa/Users/{id}/verify";
      //var link = "http://localhost:8080/uaa/Users/{id}/verify";
      link = link.replace("{id}", id);
      let Header = new Headers({
        Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
        Accept: "application/json"
        //  "if-match" : "0",
        // "Access-Control-Access-Origin" :"*"
      });

      //  myHeaders.append("Content-Type", "application/json");
      //  myHeaders.append("Access-Control-Allow-Origin", "*");

      let Option = new RequestOptions({ headers: Header });

      // confirm(link);
      this.http.get(link, Option).subscribe(
        res => {
          console.log(res.json().responseCode);

          if (res.json().responseCode == "200") {
            this.loadUsers();
          } else {
            this.loadUsers();
            alert("Verified Successfully!");
          }
        }
        // error => {
        //   console.log(JSON.stringify(error.json()));
        // }
      );
    }
    // else {

    // }
  }

  // Modal logic
  open(content, data) {
    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    });
    const head = {
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      Accept: "application/json"
    };
    const url = "https://ice.ecobank.com/uaa/Users/" + data;
    //const url = "http://localhost:8080/uaa/Users/" + data;
    axios({ method: "GET", url: url, headers: head })
      .then(response => {
        console.log(response.data);
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
