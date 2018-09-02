import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-way",
  templateUrl: "./angular-way.component.html",
  styleUrls: ["./angular-way.component.css"]
})
export class AngularWayComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: "data/data.json",
      columns: [
        {
          title: "ID",
          data: "id"
        },
        {
          title: "First name",
          data: "firstName"
        },
        {
          title: "Last name",
          data: "lastName"
        }
      ]
    };
  }
}
