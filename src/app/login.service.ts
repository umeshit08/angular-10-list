import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  getListData() {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }
}
