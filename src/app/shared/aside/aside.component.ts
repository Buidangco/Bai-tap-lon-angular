import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ScoreService} from 'src/app/score.service';
import {khoa,khoatheolop,diemtheolop,Accout} from 'src/app/model/score'
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/lib/authentication.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],

})
export class AsideComponent implements OnInit {
  // @Output() laydulieu = new EventEmitter();
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items = this.itemsSubject.asObservable();
  img="/src/assets/build/logo-wide.png";
  khoa1:khoa[];
  Accout1:Accout[];
  diemtheolop1:diemtheolop[];

  khoatheolop1:khoatheolop[];
  constructor(private scoreService:ScoreService,private authenticationService: AuthenticationService) {}

  getkhoa():void{
    this.scoreService.getdkhoa().subscribe(
      (update)=>this.khoa1=update);
  }
  getkhoatheolop():void{
    this.scoreService.getkhoatheolop().subscribe(
      (update)=>this.khoatheolop1=update
    )
  }
ten=this.authenticationService.userValue.firstName;
  // obj[key(i)]
//  layma(id){
// this.laydulieu.emit(id);
//  }
get():void{
  let local_storage = JSON.parse(localStorage.getItem('user'));
    return local_storage.length;
}
  ngOnInit(): void {
this.get();
    this.getkhoa();
    this.getkhoatheolop();
  }

}
