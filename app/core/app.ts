"use strict";

// import Angular 2
import {Component} from "@angular/core";

// app components
import {Home} from "../pages/home/home";

@Component({
	selector: "app",
	templateUrl: "core/app.template.html"
})
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}

