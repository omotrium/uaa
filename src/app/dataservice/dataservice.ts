import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  public groupId: string;

  getGroupId() {
    return this.groupId;
  }
  setGroupId(data: string) {
    this.groupId = data;
  }
}
