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
  selector: "app-application-client",
  templateUrl: "./application-client.component.html",
  styleUrls: ["./application-client.component.css"]
})
export class ApplicationClientComponent {
  public data: any;
  public AppClient: any;
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
    await this.loadAppClient();
    
      
      this.dtTrigger.next();

  }

  async loadAppClient() {
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
      url: "http://localhost:8083/api/application-clients",
      headers: head
    })
      .then(response => {
        console.log(response);
        this.AppClient = response.data;
      })
      .catch(error => console.log(error));
  }
}
