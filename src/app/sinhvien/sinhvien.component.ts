import { Component, OnInit } from '@angular/core';
import { Score } from '../model/score';
import { ScoreService } from '../score.service';
import {idlop} from 'src/app/model/score'
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  scores:Score[];
  id1:idlop[];
  constructor(private scoreService:ScoreService) { }
    getmoviesfromservices():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.getsinhvien().subscribe(
        (updateMovies)=>{
          this.scores=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.scores)}`);
        }
      )
    }
    layid(id)
    {
     this.id1= id;

    }

  ngOnInit(): void {

    this.getmoviesfromservices();
  }
}
