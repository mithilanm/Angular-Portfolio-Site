import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-about-me",
    templateUrl: "about.component.html",
    styleUrls: ["about.component.css"]
})
export class AboutMe {
    constructor(private titleService: Title){
        this.titleService.setTitle("About Me");
    }
}