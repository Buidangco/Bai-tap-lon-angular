import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ScoreService} from 'src/app/score.service';
import {khoa,khoatheolop,diemtheolop} from 'src/app/model/score'
import { BehaviorSubject } from 'rxjs';

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
  diemtheolop1:diemtheolop[];

  khoatheolop1:khoatheolop[];
  constructor(private scoreService:ScoreService,) {}
  getkhoa():void{
    this.scoreService.getdkhoa().subscribe(
      (update)=>this.khoa1=update);
  }
  getkhoatheolop():void{
    this.scoreService.getkhoatheolop().subscribe(
      (update)=>this.khoatheolop1=update
    )
  }
//  layma(id){
// this.laydulieu.emit(id);
//  }

  ngOnInit(): void {
    this.getkhoa();
    this.getkhoatheolop();
  }

}
