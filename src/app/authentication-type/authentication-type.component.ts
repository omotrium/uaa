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
  selector: "app-authentication-type",
  templateUrl: "./authentication-type.component.html",
  styleUrls: ["./authentication-type.component.css"]
})
export class AuthenticationTypeComponent {
  public data: any;
  public AuthType: any;
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
    await this.loadAuthType();
    
      
      this.dtTrigger.next();

  }

  async loadAuthType() {
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
      url: "http://localhost:8083/api/authentication-types",
      headers: head
    })
      .then(response => {
        console.log(response);
        this.AuthType = response.data;
      })
      .catch(error => console.log(error));
  }
}
