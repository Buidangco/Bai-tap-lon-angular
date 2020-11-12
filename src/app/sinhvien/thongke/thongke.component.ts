import { Component, OnInit } from '@angular/core';
import {ScoreService} from 'src/app/score.service';
import {monhocutehy, svtruot,hocky,svtruotmon, khoahoc} from 'src/app/model/score';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {

  khoahoc1:khoahoc[];
  svtruotmon:svtruot[];
  mon:monhocutehy[];
  hocky1:hocky[];
  svtruotmon1:svtruotmon[];
  first = 0;
    rows = 10;
    show=true;
  mang:any;
  constructor( private route: ActivatedRoute,private scoreService:ScoreService) { }

  getmoviessinhvientruot():void{

    // this.movies=this.movieService.getMovies();
    this.scoreService.getsvtruotmon().subscribe(
      (updateMovies)=>{
        this.svtruotmon=updateMovies;
        console.log(`this.truotmon=${JSON.stringify(this.svtruotmon)}`);
      }
    )
  }

  getmonhoc():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getquanlymonhoc().subscribe(
      (updateMovies)=>{
        this.mon=updateMovies;
        console.log(`this.khoa=${JSON.stringify(this.mon)}`);
      }
    )
  }

  getkhoahoc():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getkhoahoc().subscribe(
      (updateMovies)=>{
        this.khoahoc1=updateMovies;
        console.log(`this.khoa=${JSON.stringify(this.khoahoc1)}`);
      }
    )
  }

  gethocky():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.gethocky().subscribe(
      (updateMovies)=>{
        this.hocky1=updateMovies;
        console.log(`this.khoa=${JSON.stringify(this.hocky1)}`);
      }
    )
  }
  tim(id:string,id1:string,id2:string){
    this.show=false;
    this.scoreService.getsvtruotmontheomon(id,id1,id2).subscribe(
      (updateMovies)=>{
        this.mang=updateMovies;
        console.log(`this.truotmon=${JSON.stringify(this.mang)}`);
      }
    )
  }
  chonlan1(){
    this.show=false;
    this.scoreService.getsvtruotlan1().subscribe((updateMovies)=>{this.mang=updateMovies; console.log(`this.truotmon=${JSON.stringify(this.mang)}`);});
    console.log(this.mang)
  }
  chonlan2(){
    this.show=false;
    this.scoreService.getsvtruotlan2().subscribe((updateMovies)=>{this.mang=updateMovies;console.log(`this.truotmon=${JSON.stringify(this.mang)}`)});
  }

  ngOnInit(): void {
    this.getmoviessinhvientruot();
    this.getmonhoc();
    this.gethocky();
    this.getmoviessinhvientruot();
    this.getkhoahoc();
    // this.getMovifromRoute();
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
  this.show=true;
  this.scoreService.getsvtruotmon().subscribe(
    (updateMovies)=>{
      this.svtruotmon=updateMovies;
      console.log(`this.truotmon=${JSON.stringify(this.svtruotmon)}`);
    }
  )
}

isLastPage(): boolean {
    return this.svtruotmon ? this.first === (this.svtruotmon.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.svtruotmon ? this.first === 0 : true;
}
}
