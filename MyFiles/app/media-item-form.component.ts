import {Component} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})

export class MediaItemFormComponent {
  mediaItemForm;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mediaItemForm = this.formBuilder.group({
      'medium': new Control('Movies'),
      'name': new Control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
      'category': new Control(''),
      'year': new Control('', this.yearValidator)
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) return null;
    var year = parseInt(control.value);
    var minYear = 1900;
    var maxYear = 2100;
    if (year >= minYear && year <= maxYear) return null;
    return {'year': {'min': minYear, 'max': maxYear}};
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}