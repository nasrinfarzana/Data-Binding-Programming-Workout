import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  programSource = [
    { id: 'angular', src: "https://automationpanda.files.wordpress.com/2018/01/angular-card.png" },
    { id: 'react', src: "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png" },
    { id: 'native', src: "https://dwglogo.com/wp-content/uploads/2020/04/NativeScript_logo.png" },
    { id: 'node', src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" },
    { id: 'express', src: "https://buttercms.com/static/images/tech_banners/ExpressJS.png" }
  ];
}
