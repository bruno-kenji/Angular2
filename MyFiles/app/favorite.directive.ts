import {Directive, HostBinding, HostListener, Input} from 'angular2/core';

// mw is a directive prefix that we created for MediaWatcher, like Angular's 'ng'.
@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovering = false;
  }

  @Input()
  set mwFavorite(value) {
    this.isFavorite = value;
  };
}