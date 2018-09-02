import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import "datatables.net";
import "datatables.net-bs4";
import { Subject } from "rxjs";
import { DataService } from "../dataservice/dataservice";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.css"]
})
export class RoleComponent {
  public data: any;
  public Role: any;
  dataTable: any;
  
  dtTrigger: Subject<any> = new Subject();

  constructor(
    public http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public dataservice: DataService
  ) {}

  async ngOnInit() {
    await this.loadRole();
    
      
      this.dtTrigger.next();

  }

  async loadRole() {
    let Header = new Headers({
      Authorization:
        "Bearer  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUzNTY2NzM5MH0.XQlN-pq6wme-obRmjjBItyexuHWMoZOofY0Fpbb8xEuucmDuy_FMSPBA_vTkeayF-xMQbeaU5AgFG3iqQrg1oQ",
      Accept: "application/json"
    });
    let myHeaders = new Headers();
    const head = {
      Authorization:
        "Bearer  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUzNTY2NzM5MH0.XQlN-pq6wme-obRmjjBItyexuHWMoZOofY0Fpbb8xEuucmDuy_FMSPBA_vTkeayF-xMQbeaU5AgFG3iqQrg1oQ",
      Accept: "application/json"
    };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    let Option = new RequestOptions({ headers: Header });
    await axios({
      method: "GET",
      url: "http://localhost:8083/api/roles",
      headers: head
    })
      .then(response => {
        console.log(response);
        this.Role = response.data;
      })
      .catch(error => console.log(error));
  }
}
