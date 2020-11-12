import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlysinhvienComponent } from './quanlysinhvien.component';

describe('QuanlysinhvienComponent', () => {
  let component: QuanlysinhvienComponent;
  let fixture: ComponentFixture<QuanlysinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlysinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlysinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
