import { Component } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  listData: any;

  constructor(public log: LoginService) {}

  ngOnInit() {
    this.log.getListData().subscribe(res => {
      if (res) {
        this.listData = res;
      }
    });
  }
}
