import { Component } from "@angular/core";
import { IMovie } from "./movie.model";

@Component({
  selector:'app-movie-list',
  templateUrl:'./movie-list.component.html',
  styleUrls:['./movie-list.component.css']
})
export class MovieListComponent{
   movies:IMovie[]=[]

   addMovieToTheList(m:IMovie){
     this.movies.push(m)
   }
   
}