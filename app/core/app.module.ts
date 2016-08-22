
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_PROVIDERS} from "@angular/http";

import {routing, appRoutingProviders} from "./app.routing";
import {App} from "./app";

@NgModule({
    declarations: [App],
    imports: [BrowserModule, routing],
    providers: [appRoutingProviders],
    bootstrap:    [App]
})
export class AppModule {}
