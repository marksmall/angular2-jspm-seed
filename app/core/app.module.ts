
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {HTTP_PROVIDERS} from "@angular/http";

import {App} from "./app";

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
    bootstrap:    [App]
})
export class AppModule {}
