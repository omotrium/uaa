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
  selector: "app-user-type",
  templateUrl: "./user-type.component.html",
  styleUrls: ["./user-type.component.css"]
})
export class UserTypeComponent {
  public data: any;
  public Types: any;
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
    await this.loadTypes();
    
      
      this.dtTrigger.next();

  }

  async loadTypes() {
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
      url: "http://localhost:8083/api/user-types",
      headers: head
    })
      .then(response => {
        console.log(response);
        this.Types = response.data;
      })
      .catch(error => console.log(error));
  }
}
