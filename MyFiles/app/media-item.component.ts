import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from './favorite.directive';

@Component({
    selector: 'media-item',
    directives: [FavoriteDirective],
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input('mediaItemToWatch') mediaItem;
  name = 'The Redemption';

  @Output('deleted') delete = new EventEmitter();

  wasWatched() {
    return true;
  };

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}