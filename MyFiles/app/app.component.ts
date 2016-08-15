import {Component} from 'angular2/core';
import {MediaItemListComponent} from './media-item-list.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemListComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  onMediaItemDeleted(mediaItem) {
    console.log('deleted');
  };

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  }
}