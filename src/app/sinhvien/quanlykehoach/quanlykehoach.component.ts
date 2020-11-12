import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import{Score, Score1} from 'src/app/model/score'
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-quanlykehoach',
  templateUrl: './quanlykehoach.component.html',
  styleUrls: ['./quanlykehoach.component.css']
})
export class QuanlykehoachComponent implements OnInit {
  first = 0;
    rows = 10;
  scores:Score1[];
  constructor(private scoreService:ScoreService) { }
  getmoviesfromservices():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getkehoach().subscribe(
      (updateMovies)=>{
        this.scores=updateMovies;
        console.log(`this.movies=${JSON.stringify(this.scores)}`);
      }
    )
  }
  ngOnInit(): void {
    this.getmoviesfromservices();
  }
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.scores ? this.first === (this.scores.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.scores ? this.first === 0 : true;
}
}
