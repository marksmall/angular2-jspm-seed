
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {HTTP_PROVIDERS} from "@angular/http";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouterOutlet, RouterLink} from "@angular/router-deprecated";


import {App} from "./app";

@NgModule({
    declarations: [RouterOutlet, RouterLink, App],
    imports: [BrowserModule],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
    bootstrap:    [App]
})
export class AppModule {}
