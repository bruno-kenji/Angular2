import {Directive, HostBinding} from 'angular2/core';

// mw is a directive prefix that we created for MediaWatcher, like Angular's 'ng'.
@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}