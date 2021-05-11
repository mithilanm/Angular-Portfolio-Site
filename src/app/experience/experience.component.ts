import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['experience.component.css']
})
export class Experience{
    constructor(private titleService: Title){
        this.titleService.setTitle("Experience");
    }
    show: string = '';

    readMore(name: string){
        this.show = name;
    }
}