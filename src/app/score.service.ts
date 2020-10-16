import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs';
import {diemtheolop,dssinhvien, hocky, khoa, lop, Score, Score1, sinhvien, sinhviendiem, themdiemsv,monhocutehy, svtruot,svtruotmon,khoahoc, tracuuma,laykehoach,khoatheolop} from './model/score'
import {catchError,map,tap} from 'rxjs/operators'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private moviesURL="https://localhost:44388/api/ScoresClasses/diem";
  private moviesURLKH="https://localhost:44388/api/ScoresClasses/kehoach";
  private moviesdssv="https://localhost:44388/api/ScoresClasses/danhsachsinhvien";
  private movieslop="https://localhost:44388/api/ScoresClasses/danhsachlop";
  private movieskhoa="https://localhost:44388/api/ScoresClasses/danhsachkhoa";
  private sinhvienurl="https://localhost:44388/api/ScoresClasses/addstudent";
  private hockyurl="https://localhost:44388/api/ScoresClasses/hocky";
  private quanlysinhvienthemdiemurl="https://localhost:44388/api/ScoresClasses/quanlysinhvienthemdiem";
  private monhocurl="https://localhost:44388/api/ScoresClasses/danhsachmon";
  private themdiemsinhvien="https://localhost:44388/api/ScoresClasses/adddiemstudent";
  private Tksvtruotmon="https://localhost:44388/api/ScoresClasses/tksvtruotmon";
  private Tksvtruotmontheomon="https://localhost:44388/api/ScoresClasses/theomon";
  private khoahocurrl="https://localhost:44388/api/ScoresClasses/khoahoc";
  private tracuurrl="https://localhost:44388/api/ScoresClasses/tracuuma";

  private laykehoachurl="https://localhost:44388/api/ScoresClasses/laykehoach";
  private khoatheolopurl="https://localhost:44388/api/ScoresClasses/danhsachkhoatheolop";

  private diemtheolopurl="https://localhost:44388/api/ScoresClasses/diemtheolop";

  private diemhoclai1="https://localhost:44388/api/ScoresClasses/updatediem";

  getsinhvien(): Observable<Score[]>{
    return this.http.get<Score[]>(this.moviesURL).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }


  getkehoach(): Observable<Score1[]>{
    return this.http.get<Score1[]>(this.moviesURLKH).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getdssv(): Observable<dssinhvien[]>{
    return this.http.get<dssinhvien[]>(this.moviesdssv).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }
  getdlop(): Observable<lop[]>{
    return this.http.get<lop[]>(this.movieslop).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getdkhoa(): Observable<khoa[]>{
    return this.http.get<khoa[]>(this.movieskhoa).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  gethocky(): Observable<hocky[]>{
    return this.http.get<hocky[]>(this.hockyurl).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getquanlysinhvienthemdiem(): Observable<sinhviendiem[]>{
    return this.http.get<sinhviendiem[]>(this.quanlysinhvienthemdiemurl).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getquanlymonhoc(): Observable<monhocutehy[]>{
    return this.http.get<monhocutehy[]>(this.monhocurl).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }


  getsvtruotmon(): Observable<svtruot[]>{
    return this.http.get<svtruot[]>(this.Tksvtruotmon).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getkhoahoc(): Observable<khoahoc[]>{
    return this.http.get<khoahoc[]>(this.khoahocurrl).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getklaykehoach(): Observable<laykehoach[]>{
    return this.http.get<laykehoach[]>(this.laykehoachurl).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }

  getsvtruotmontheomon(id:string,id1:string,id2:string):Observable<svtruotmon>{
    const url =`${this.Tksvtruotmontheomon}/${id}/${id1}/${id2}`;
    return this.http.get<svtruotmon>(url).pipe(
      tap(selectionmovie=>console.log(`select sinhvientruot=${JSON.stringify(selectionmovie)}`)),
      catchError(error=>of(new svtruotmon()))
    )
  }

  gettracuusinhvien(id:string,id1:string,id2:string):Observable<tracuuma>{
    const url =`${this.tracuurrl}/${id}/${id1}/${id2}`;
    return this.http.get<tracuuma>(url).pipe(
      tap(selectionmovie=>console.log(`select tracuu=${JSON.stringify(selectionmovie)}`)),
      catchError(error=>of(new tracuuma()))
    )
  }


  getdiemtheolop(id:string): Observable<diemtheolop[]>{
    const url =`${this.diemtheolopurl}/${id}`;
    return this.http.get<diemtheolop[]>(url).pipe(
      tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
      catchError(error=>of([]))
    )
  }
  getkhoatheolop():Observable<khoatheolop[]>{
    return this.http.get<khoatheolop[]>(this.khoatheolopurl).pipe(
      tap(respon=>console.log(`res =${JSON.stringify(respon)}`)),
      catchError(error=>of([]))
    )
  }

  addsv(newmovi:sinhvien):Observable<sinhvien>{
    return this.http.post<sinhvien>(this.sinhvienurl,newmovi,httpOptions).pipe(
      tap((mo:sinhvien)=>console.log(`receivedMovies =${JSON.stringify(sinhvien)}`)),
      catchError(error=>of(new sinhvien()))
    )
  }
  adddiemsv(newsinhvien:themdiemsv):Observable<themdiemsv>
  {
    return this.http.post<themdiemsv>(this.themdiemsinhvien,newsinhvien,httpOptions).pipe(
      tap((mo:themdiemsv)=>console.log(`diem=${JSON.stringify(themdiemsv)}`)),
      catchError(error=>of(new themdiemsv()))
    )
  }

  updatehoclai1(score:Score):Observable<any>{
    return this.http.put(this.diemhoclai1,score,httpOptions).pipe(
     tap(updatemovie=>console.log(`update movie =${JSON.stringify(updatemovie)}`)),
     catchError(error=>of(new Score()))
    )
  }
  constructor( private http: HttpClient) { }
//   private moviesURL="https://localhost:44316/api/ScoresFaculties";
//   private sinhvienurl="https://localhost:44348/api/ScoresClasses/addstudent";
//   private themdiemsinhvien="https://localhost:44348/api/ScoresClasses/adddiemstudent";
//   private Tksvtruotmontheomon="https://localhost:44348/api/ScoresClasses/theomon";
//   private tracuurrl="https://localhost:44348/api/ScoresClasses/tracuuma";
//   getsinhvien(): Observable<Score[]>{
//     const url =`${this.moviesURL}/diem`;
//     return this.http.get<Score[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getkehoach(): Observable<Score1[]>{
//     const url =`${this.moviesURL}/kehoach`;
//     return this.http.get<Score1[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getdssv(): Observable<dssinhvien[]>{
//     const url =`${this.moviesURL}/danhsachsinhvien`;
//     return this.http.get<dssinhvien[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }
//   getdlop(): Observable<lop[]>{
//     const url =`${this.moviesURL}/danhsachlop`;
//     return this.http.get<lop[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getdkhoa(): Observable<khoa[]>{
//     const url =`${this.moviesURL}/danhsachkhoa"`;
//     return this.http.get<khoa[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   gethocky(): Observable<hocky[]>{
//     const url =`${this.moviesURL}/hocky`;
//     return this.http.get<hocky[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getquanlysinhvienthemdiem(): Observable<sinhviendiem[]>{
//     const url =`${this.moviesURL}/quanlysinhvienthemdiem`;
//     return this.http.get<sinhviendiem[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getquanlymonhoc(): Observable<monhocutehy[]>{
//     const url =`${this.moviesURL}/danhsachmon`;
//     return this.http.get<monhocutehy[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }


//   getsvtruotmon(): Observable<svtruot[]>{
//     const url =`${this.moviesURL}/tksvtruotmon`;
//     return this.http.get<svtruot[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getkhoahoc(): Observable<khoahoc[]>{
//     const url =`${this.moviesURL}/khoahoc`;
//     return this.http.get<khoahoc[]>(url).pipe(
//       tap(receivedMovies=>console.log(`receivedMovies =${JSON.stringify(receivedMovies)}`)),
//       catchError(error=>of([]))
//     )
//   }

//   getsvtruotmontheomon(id:string,id1:string,id2:string):Observable<svtruotmon>{
//     const url =`${this.Tksvtruotmontheomon}/${id}/${id1}/${id2}`;
//     return this.http.get<svtruotmon>(url).pipe(
//       tap(selectionmovie=>console.log(`select sinhvientruot=${JSON.stringify(selectionmovie)}`)),
//       catchError(error=>of(new svtruotmon()))
//     )
//   }

//   gettracuusinhvien(id:string,id1:string,id2:string):Observable<tracuuma>{
//     const url =`${this.tracuurrl}/${id}/${id1}/${id2}`;
//     return this.http.get<tracuuma>(url).pipe(
//       tap(selectionmovie=>console.log(`select tracuu=${JSON.stringify(selectionmovie)}`)),
//       catchError(error=>of(new tracuuma()))
//     )
//   }

//   addsv(newmovi:sinhvien):Observable<sinhvien>{
//     return this.http.post<sinhvien>(this.sinhvienurl,newmovi,httpOptions).pipe(
//       tap((mo:sinhvien)=>console.log(`receivedMovies =${JSON.stringify(sinhvien)}`)),
//       catchError(error=>of(new sinhvien()))
//     )
//   }

//   adddiemsv(newsinhvien:themdiemsv):Observable<themdiemsv>
//   {
//     return this.http.post<themdiemsv>(this.themdiemsinhvien,newsinhvien,httpOptions).pipe(
//       tap((mo:themdiemsv)=>console.log(`diem=${JSON.stringify(themdiemsv)}`)),
//       catchError(error=>of(new themdiemsv()))
//     )
//   }
// constructor( private http: HttpClient) { }
}
