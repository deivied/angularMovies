import { Component, EventEmitter, Output } from '@angular/core';
import { IMovie } from './movie.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieForm {
  @Output() onMovieAdded: EventEmitter<IMovie> = new EventEmitter<IMovie>();
  movieForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieForm=this.fb.group({
      title:[''],
      description:[''],
      cover:['']

    })
   }


  addMovieToList() {
    this.onMovieAdded.next(this.movieForm.value);
  }
}
