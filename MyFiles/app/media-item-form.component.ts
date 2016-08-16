import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})

export class MediaItemFormComponent {
  mediaItemForm;

  ngOnInit() {
    this.mediaItemForm = new ControlGroup({
      'medium': new Control('Movies'),
      'name': new Control('', Validators.pattern('[\\w\\-\\s\\/]+')),
      'category': new Control(''),
      'year': new Control('')
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}