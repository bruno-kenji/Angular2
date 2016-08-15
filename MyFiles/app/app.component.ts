import {Component} from 'angular2/core';

@Component({
    selector: 'media-tracker-app',
    templateUrl: 'app/app.component.html'
    styles: [`
      h1 {
        color: #fff;
      }
      .description {
        font-style: italic;
      }
    `]
})
export class AppComponent {}