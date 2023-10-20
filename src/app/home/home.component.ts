import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  uploadedFiles: any[] = [];
  maxSize:number = 1000000;
  multiple:boolean = false;

    constructor() {}

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

    }

}


