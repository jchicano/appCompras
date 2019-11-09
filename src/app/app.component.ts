import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCompras';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAJa00Nq0uJ1qTd0iQq_P1ElFxgS78ysYU",
      authDomain: "appcompras-angular-add.firebaseapp.com"
    });
  }
}
