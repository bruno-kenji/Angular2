import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MediaItemService} from './media-item.service';

bootstrap(AppComponent, [
  MediaItemService
]);
