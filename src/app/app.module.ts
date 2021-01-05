import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
