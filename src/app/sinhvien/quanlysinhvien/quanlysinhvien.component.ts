import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import {dssinhvien, khoa, lop, sinhvien} from 'src/app/model/score'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quanlysinhvien',
  templateUrl: './quanlysinhvien.component.html',
  styleUrls: ['./quanlysinhvien.component.css']
})
export class QuanlysinhvienComponent implements OnInit {
  public searchText1:string;
  public customerData : any;
  public loginForm: FormGroup;
  first = 0;
  rows = 5;
  required: Boolean
  dssv:dssinhvien[];
  lop1:lop[];
  khoa1:khoa[];
  sinhvien1:sinhvien[];
  constructor(private scoreService:ScoreService ) { }

  getmoviesfromservices():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getdssv().subscribe(
      (updateMovies)=>{
        this.dssv=updateMovies;
        console.log(`this.movies=${JSON.stringify(this.dssv)}`);
      }
    )
  }
  getmoviesfromserviceslop():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getdlop().subscribe(
      (updateMovies)=>{
        this.lop1=updateMovies;
        console.log(`this.lop=${JSON.stringify(this.lop1)}`);
      }
    )
  }
  getmoviesfromserviceskhoa():void{
    // this.movies=this.movieService.getMovies();
    this.scoreService.getdkhoa().subscribe(
      (updateMovies)=>{
        this.khoa1=updateMovies;
        console.log(`this.khoa=${JSON.stringify(this.khoa1)}`);
      }
    )
  }
  // add(id_student:string,id_class:string,name_student:string,sex:string,village:string,date:Date,name:string):void{
  //   // console.log(id_student,name_student,sex);
  //   const dssv1:dssinhvien=new dssinhvien();
  //   dssv1.iD_Student=id_student;
  //   dssv1.iD_class=id_class;
  //   dssv1.name_Student=name_student;
  //   dssv1.sex_Student=sex;
  //   dssv1.village_Studen=village;
  //   dssv1.date_student=date;
  //   dssv1.name_Faculty=name;
  //   name_student=name_student.trim();
  //   const sv:sinhvien=new sinhvien();
  //   sv.iD_Student=id_student;
  //   sv.iD_class=id_class;
  //   sv.name_Student=name_student;
  //   sv.sex_Student=sex;
  //   sv.village_Studen=village;
  //   sv.date_student=date;
  //   this.scoreService.addsv(sv).subscribe(
  //     (updateMovies)=>{
  //       debugger;
  //       this.dssv.push(dssv1);
  //       console.log(`this.khoa=${JSON.stringify(this.sinhvien1)}`);
  //     }
  //   )
  // }


  ngOnInit(): void {
    this.getmoviesfromserviceskhoa();
    this.getmoviesfromservices();
    this.getmoviesfromserviceslop();
    this.loginForm = new FormGroup({
      'masv': new FormControl('', Validators.required),
      'Hoten': new FormControl('', Validators.required),
      'diachi': new FormControl('', Validators.required),
      'malop': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'chuyennganh': new FormControl('', Validators.required),
      'ngaysinh': new FormControl('', Validators.required),
      // 'remember': new FormControl(false, []),
    });
  }
  onSubmit(data) {
    const dssv1:dssinhvien=new dssinhvien();
    dssv1.iD_Student=data.masv;
    dssv1.iD_class=data.malop;
    dssv1.name_Student=data.Hoten;
    dssv1.sex_Student=data.gender;
    dssv1.village_Studen=data.diachi;
    dssv1.date_student=data.ngaysinh;
    dssv1.name_Faculty=data.chuyennganh;
    // name_student=name_student.trim();
    const sv:sinhvien=new sinhvien();
    sv.iD_Student=data.masv;
    sv.iD_class=data.malop;
    sv.name_Student=data.Hoten;
    sv.sex_Student=data.gender;
    sv.village_Studen=data.diachi;
    sv.date_student=data.ngaysinh;
    this.scoreService.addsv(sv).subscribe(
      (updateMovies)=>{
        debugger;
        this.dssv.push(dssv1);
        console.log(`this.khoa=${JSON.stringify(this.sinhvien1)}`);

      }
    )
 }
  // onSubmit(data:any){
  //   debugger;
  //   const dssv1:dssinhvien=new dssinhvien();
  //   dssv1.iD_Student=data.masv;
  //   dssv1.iD_class=data.malop;
  //   dssv1.name_Student=data.Hoten;
  //   dssv1.sex_Student=data.gender;
  //   dssv1.village_Studen=data.diachi;
  //   dssv1.date_student=data.ngaysinh;
  //   dssv1.name_Faculty=data.chuyennganh;
  //   // name_student=name_student.trim();
  //   const sv:sinhvien=new sinhvien();
  //   sv.iD_Student=data.masv;
  //   sv.iD_class=data.malop;
  //   sv.name_Student=data.Hoten;
  //   sv.sex_Student=data.gender;
  //   sv.village_Studen=data.diachi;
  //   sv.date_student=data.ngaysinh;
  //   this.scoreService.addsv(sv).subscribe(
  //     (updateMovies)=>{
  //       this.dssv.push(dssv1);
  //       console.log(`this.khoa=${JSON.stringify(this.sinhvien1)}`);
  //     }
  //   )
  // }
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
    return this.dssv ? this.first === (this.dssv.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.dssv ? this.first === 0 : true;
}

}
