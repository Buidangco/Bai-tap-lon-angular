import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { dssinhvien, hocky, laykehoach, monhocutehy, Score, Score1, sinhviendiem, themdiemsv,diemtheolop,idlop } from 'src/app/model/score';
import { ScoreService } from 'src/app/score.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-danhsachtheolop',
  templateUrl: './danhsachtheolop.component.html',
  styleUrls: ['./danhsachtheolop.component.css']
})
export class DanhsachtheolopComponent implements OnInit {
  public loginForm: FormGroup;
  public searchText : string;
  public searchText1 : string;
  public customerData : any;
  first = 0;
  rows = 6;
  diemtheolop1:diemtheolop[];
  scores:Score[];
  scores1:Score1[];
  hocky1:hocky[];
  danhsach:dssinhvien[];
  sinhviendiem:sinhviendiem[];
  diemsv:themdiemsv[];
  mon:monhocutehy[];
  laykehoach1:laykehoach[];
  id: string;
  subscription: Subscription = new Subscription();

  constructor(private scoreService:ScoreService,
    private route: ActivatedRoute) {
      this.subscription.add(this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        console.log(params['id']);
        this.scoreService.getdiemtheolop(this.id).subscribe(
          (updateMovies)=>{
            this.diemtheolop1=updateMovies;
            // console.log(`this.movies=${JSON.stringify(this.diemtheolop1)}`);
          }
        )
      }));
     }
     ngOnDestroy(){
      this.subscription.unsubscribe();
     }
    getmoviesfromservices():void{
      // const id = this.route.snapshot.paramMap.get('id');
      // this.movies=this.movieService.getMovies();
      this.scoreService.getdiemtheolop(this.id).subscribe(
        (updateMovies)=>{
          this.diemtheolop1=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.diemtheolop1)}`);
        }
      )
    }
    getmoviesfromserviceshocky():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.gethocky().subscribe(
        (updateMovies)=>{
          this.hocky1=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.hocky1)}`);
        }
      )
    }

    getmoviesfromserviceskehoach():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.getkehoach().subscribe(
        (updateMovies)=>{
          this.scores1=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.scores1)}`);
        }
      )
    }

    getmoviesfromservicessinhviendiem():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.getquanlysinhvienthemdiem().subscribe(
        (updateMovies)=>{
          this.sinhviendiem=updateMovies;
          console.log(`this.sinhvien=${JSON.stringify(this.sinhviendiem)}`);
        }
      )
    }

    getmoviesfromservicesmonhoc():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.getquanlymonhoc().subscribe(
        (updateMovies)=>{
          this.mon=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.mon)}`);
        }
      )
    }


    Themdiem(id_student:string,id_scores:string,name_Student:string,sex:string,id_semeter:string,id_plan:string,attendance:string
      ,exercise:string,sum:string,date:Date,monhoc:string,baitap:string):void{
      // console.log(id_student,id_scores,name_Student,sex,date,medium_score,exercise,medium_score,conduct,monhoc);
      // console.log(parseInt(baitap));
      const diem:Score=new Score();
      diem.iD_Student=id_student;
      diem.name_Student=name_Student;
      diem.sex_Student=sex;
      diem.date_student=date;
      diem.exercise_score=parseInt(exercise);
      diem.attendance=parseInt(attendance);
      diem.practice=parseInt(baitap);
      diem.medium_score=(parseInt(attendance)+parseInt(exercise))/2;
      diem.summary_score=parseInt(sum);
      diem.total_scores=(diem.medium_score+parseInt(sum))/2;
      // diem.conduct_score=conduct;
      diem.name_Subject=monhoc;

      // name_student=name_student.trim();
      if(baitap=="")
      {
        const diemsv:themdiemsv=new themdiemsv();
        diemsv.id_scores=id_scores;
        diemsv.id_student=id_student;
        diemsv.id_plan=id_plan;
        diemsv.iD_Semester=id_semeter;
        diemsv.attendance=parseInt(attendance);
        diemsv.exercise_score=parseInt(exercise);
        diemsv.practice=0;
        diemsv.summary_score=parseInt(sum);
        // diemsv.total_score=(diemsv.medium_score+sum)/2;
        // diemsv.conduct_score=conduct;

        this.scoreService.adddiemsv(diemsv).subscribe(
          (updateMovies1)=>{
            this.scores.push(diem);
            console.log(`this.khoa=${JSON.stringify(this.scores)}`);
          }
        )
      }
      else
      {
        const diemsv:themdiemsv=new themdiemsv();
        diemsv.id_scores=id_scores;
        diemsv.id_student=id_student;
        diemsv.id_plan=id_plan;
        diemsv.iD_Semester=id_semeter;
        diemsv.attendance=parseInt(attendance);
        diemsv.exercise_score=parseInt(exercise);
        diemsv.practice=parseInt(baitap);
        diemsv.summary_score=parseInt(sum);
        // diemsv.total_score=(diemsv.medium_score+sum)/2;
        // diemsv.conduct_score=conduct;

        this.scoreService.adddiemsv(diemsv).subscribe(
          (updateMovies1)=>{
            this.scores.push(diem);
            console.log(`this.khoa=${JSON.stringify(this.scores)}`);
          }
        )
      }
      // diemsv.medium_score=(attendance+exercise)/2;

    }
    check()
    {
      this.scoreService.getdssv().subscribe(
        (updateMovies)=>{
          this.danhsach=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.scores)}`);
        }
      )
    }
    check1()
    {
      this.scoreService.getklaykehoach().subscribe(
        (updateMovies)=>{
          this.laykehoach1=updateMovies;
          console.log(`this.laykeoach=${JSON.stringify(this.laykehoach1)}`);
        }
      )
    }
    public diem1: Float32Array;
    public diem2: Float32Array;
  ngOnInit(): void {
    this.getmoviesfromservices();
    this.getmoviesfromserviceshocky();
    this.getmoviesfromserviceskehoach();
    this.getmoviesfromservicessinhviendiem();
    this.getmoviesfromservicesmonhoc();
    this.loginForm = new FormGroup({
      'madiem': new FormControl('', Validators.required),
      'masv': new FormControl('', Validators.required)
    });
  }

  onSubmit(data)
  {

    // const diem:Score=new Score();
    // diem.iD_Student=data.masv;
    // diem.name_Student=data.hoten;
    // diem.sex_Student=data.gender;
    // diem.date_student=data.ngaysinh;
    // diem.exercise_score=parseInt(data.diemtt);
    // diem.attendance=parseInt(data.diemcc);
    // diem.medium_score=(parseInt(data.diemcc)+parseInt(data.diemtt))/2;
    // diem.summary_score=parseInt(data.diemkt);
    // diem.total_scores=(diem.medium_score+parseInt(data.diemkt))/2;
    // // diem.conduct_score=conduct;
    // diem.name_Subject=data.monhoc;

    // // name_student=name_student.trim();
    // const diemsv:themdiemsv=new themdiemsv();
    // diemsv.id_scores=data.madiem;
    // diemsv.id_student=data.masv;
    // diemsv.id_plan=data.kehoach;
    // diemsv.iD_Semester=data.hocky;
    // diemsv.attendance=parseInt(data.diemcc);
    // diemsv.exercise_score=parseInt(data.diemtt);
    // // diemsv.medium_score=(attendance+exercise)/2;
    // diemsv.summary_score=parseInt(data.diemkt);
    // // diemsv.total_score=(diemsv.medium_score+sum)/2;
    // // diemsv.conduct_score=conduct;

    // this.scoreService.adddiemsv(diemsv).subscribe(
    //   (updateMovies1)=>{
    //     this.scores.push(diem);
    //     console.log(`this.khoa=${JSON.stringify(this.scores)}`);
    //   }
    // )
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
exportColumns: any[];
doc:any;
exportPdf() {
  import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
          this.doc = new jsPDF.default()
          this.doc.autoTable(this.exportColumns, this.scores);
          this.doc.save('diemthi.pdf');
      })
  })
}

}
