"use strict";

// import the application
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule }              from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule).then(
  (success: any) => console.log("Bootstrap successful"),
  (error: any) => console.log("Error: ", error)
);
