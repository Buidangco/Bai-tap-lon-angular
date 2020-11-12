import { Component, OnInit } from '@angular/core';

import { padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { dssinhvien, hocky, laykehoach, monhocutehy, Score, Score1, sinhviendiem, themdiemsv } from 'src/app/model/score';
import { ScoreService } from 'src/app/score.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/lib/authentication.service';
import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';
// import { MessageService } from 'primeng/api';
// import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
  styleUrls: ['./danhsach.component.css']
})
export class DanhsachComponent implements OnInit {
  public loginForm: FormGroup;
  public loginForm1:FormGroup;
  public searchText : string;
  public searchText1 : string;
  public customerData : any;
  first = 0;
  rows = 6;
  scores:Score[];
  scores1:Score1[];
  hocky1:hocky[];
  danhsach:dssinhvien[];
  sinhviendiem:sinhviendiem[];
  diemsv:themdiemsv[];
  mon:monhocutehy[];
  laykehoach1:laykehoach[];
  constructor(private scoreService:ScoreService,private authenticationService: AuthenticationService) { }
    getmoviesfromservices():void{
      // this.movies=this.movieService.getMovies();
      this.scoreService.getsinhvien().subscribe(
        (updateMovies)=>{
          this.scores=updateMovies;
          console.log(`this.movies=${JSON.stringify(this.scores)}`);
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

    // Themdiem1(id2:string)
    // {
    //   console.log(id2);
    // }
    today = new Date();
    a=(this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear());
    b=this.today.getHours()+'-'+this.today.getMinutes()+'-'+this.today.getSeconds();
    date=this.a+''+this.b;
    Themdiem(id_student:string,id_scores:string,name_Student:string,sex:string,id_semeter:string,id_plan:string,attendance:string
      ,exercise:string,sum:string,date:Date,monhoc:string,baitap:string):void{
      // console.log(id_student,id_scores,name_Student,sex,date,medium_score,exercise,medium_score,conduct,monhoc);
      // console.log(id_semeter,id_scores);
      const diem:Score=new Score();
      debugger;
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

      // diem.date_create=this.date.toString();
      // name_student=name_student.trim();
      if(baitap=="")
      {
        const diemsv:themdiemsv=new themdiemsv();
        debugger;
        diemsv.id_scores=id_scores;
        diemsv.id_student=id_student;
        diemsv.id_plan=id_plan;
        diemsv.iD_Semester=id_semeter;
        diemsv.attendance=parseInt(attendance);
        diemsv.exercise_score=parseInt(exercise);
        diemsv.practice=0;
        diemsv.summary_score=parseInt(sum);
        diemsv.name_create=this.authenticationService.userValue.firstName;
        diemsv.date_create=this.a;
        // diemsv.total_score=(diemsv.medium_score+sum)/2;
        // diemsv.conduct_score=conduct;

        this.scoreService.adddiemsv(diemsv).subscribe(
          (updateMovies1)=>{
            // this.scores.push(diem);
            this.getmoviesfromservices();
            // this.messageService.add({severity:'success', summary:'Thêm thành công', detail:'Via MessageService'});
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
        diemsv.name_create=this.authenticationService.userValue.firstName;
        // diemsv.total_score=(diemsv.medium_score+sum)/2;
        // diemsv.conduct_score=conduct;
        diemsv.date_create=this.a;
        this.scoreService.adddiemsv(diemsv).subscribe(
          (updateMovies1)=>{
            // this.scores.push(diem);
            this.getmoviesfromservices();
            // this.messageService.add({severity:'success', summary:'Thêm thành công', detail:'Via MessageService'});
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
    idkh:any;
    idhs:any;
    idhk:any;
    name:any;
    mon2:any;
    diemcc:any;
    diemth:any;
    diembaitap:any;
    updatediem(idkh:string,idhs:string,idhk:string,name:string,mon1:string,diemcc:number,diembt:number,diemth:number)
    {
      this.idkh=idkh;
      this.idhs=idhs;
      this.idhk=idhk;
      this.name = name;
      this.mon2=mon1;
      this.diemcc=diemcc;
      this.diembaitap=diembt;
      this.diemth=diemth
    }
    idkh1:any;
    idhs1:any;
    idhk1:any;
    name1:any;
    mon21:any;
    diemcc1:any;
    diemth1:any;
    diembaitap1:any;
    updatediem1(idkh:string,idhs:string,idhk:string,name:string,mon1:string,diemcc:number,diembt:number,diemth:number)
    {
      this.idkh1=idkh;
      this.idhs1=idhs;
      this.idhk1=idhk;
      this.name1 = name;
      this.mon21=mon1;
      this.diemcc1=diemcc;
      this.diembaitap1=diembt;
      this.diemth1=diemth
    }
    // public diem1: Float32Array;
    // public diem2: Float32Array;

    // onSubmit(form:NgForm)
    // {
    //   this.in
    // }

  ngOnInit(): void {
    this.getmoviesfromservices();
    this.getmoviesfromserviceshocky();
    this.getmoviesfromserviceskehoach();
    this.getmoviesfromservicessinhviendiem();
    this.getmoviesfromservicesmonhoc();
    this.loginForm = new FormGroup({
      // 'diemhocsinh': new FormControl('', [Validators.min(0), Validators.max(10),Validators.required])
      'diemhocsinh': new FormControl('', Validators.required),
    });

    // this.loginForm1 = new FormGroup({
    //   'chuyencan': new FormControl('', Validators.required),
    //   'thuchanh': new FormControl('', Validators.required),
    //   'ketthuc': new FormControl('', Validators.required),
    // });
  }
  // onSubmit1(data){

  // }
  onSubmit(data)
  {
    console.log(data, this.idkh, this.idhs,this.idhk, this.idhs,this.authenticationService.userValue.firstName);
    // this.scoreService.updatehoclai1(data);
    const diem:Score=new Score();
    diem.diemhoclai1=data.diemhocsinh;
    diem.iD_plan=this.idkh;
    diem.iD_Student=this.idhs;
    diem.iD_Semester=this.idhk;
    diem.attendance=  this.diemcc;
    diem.exercise_score=this.diembaitap;
    diem.practice=this.diemth;
debugger;
    this.scoreService.updatehoclai1(diem).subscribe(
        (updateMovies1)=>{
          this.getmoviesfromservices();
        }
      )
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
  onSubmit1(data)
  {
    console.log(data, this.idkh, this.idhs,this.idhk, this.idhs,this.authenticationService.userValue.firstName);
    // this.scoreService.updatehoclai1(data);
    const diem:Score=new Score();
    diem.diemhoclai2=data.diemhocsinh;
    diem.iD_plan=this.idkh1;
    diem.iD_Student=this.idhs1;
    diem.iD_Semester=this.idhk1;
    diem.attendance=  this.diemcc1;
    diem.exercise_score=this.diembaitap1;
    diem.practice=this.diemth1;
    this.scoreService.updatehoclai2(diem).subscribe(
        (updateMovies1)=>{
          this.getmoviesfromservices();
        }
      )
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
exportExcel() {
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.scores);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "scores");
  });
}
saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  });
}
}


