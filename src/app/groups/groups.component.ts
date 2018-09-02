import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: "groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"]
})
export class GroupsComponent {
  closeResult: string;
  public data: any;
  displayName = "";
  description = "";

  public clients: any;
  public Groups: any;
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
    // funcPost(nameVal, passwordVal, passwordVal)
    //funcPostT(userNameVal, passwordVal, emailsVal) {
    var link = "https://ice.ecobank.com/uaa/Groups";
    var data = JSON.stringify({
      displayName: this.displayName,
      description: this.description
    });

    const schema = {
      displayName: "null",
      description: "null"
    };
    schema.displayName = this.displayName;
    schema.description = this.description;

    console.log(this.displayName);
    console.log(this.description);

    let Header = new Headers({
      Authorization: "Bearer  b0738afb0b244dd5b5db862fa540aa2b",
      "Content-Type": "application/json"
    });
    let myHeaders = new Headers();

    

    let Option = new RequestOptions({ headers: Header });

    this.http.post(link, schema, Option).subscribe(
      res => {
        console.log(res);
        console.log(res.status);
        if (res.status == 201) {
          this.displayName = "";
          this.description = "";

          alert("User " + this.displayName + " Created Successfully");
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
      var link = "https://ice.ecobank.com/uaa/Groups//{groupId}";
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
}
