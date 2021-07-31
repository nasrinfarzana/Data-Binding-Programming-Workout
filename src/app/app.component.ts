import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  programSource = [
    { id: 'angular', text:'Angular', src: "https://automationpanda.files.wordpress.com/2018/01/angular-card.png" },
    { id: 'react', text:'React', src: "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png" },
    { id: 'native', text:'Native', src: "https://dwglogo.com/wp-content/uploads/2020/04/NativeScript_logo.png" },
    { id: 'node', text:'Node JS', src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" },
    { id: 'express', text:'Express', src: "https://buttercms.com/static/images/tech_banners/ExpressJS.png" }
  ];
  loadUrl:string="";
  languageSelect(event):void{
    this.loadUrl = this.programSource[parseInt(event.target.value)].src;
  }
}
