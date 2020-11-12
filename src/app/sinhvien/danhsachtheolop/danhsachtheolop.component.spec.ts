import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachtheolopComponent } from './danhsachtheolop.component';

describe('DanhsachtheolopComponent', () => {
  let component: DanhsachtheolopComponent;
  let fixture: ComponentFixture<DanhsachtheolopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachtheolopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachtheolopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
