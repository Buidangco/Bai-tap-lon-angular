import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlykehoachComponent } from './quanlykehoach.component';

describe('QuanlykehoachComponent', () => {
  let component: QuanlykehoachComponent;
  let fixture: ComponentFixture<QuanlykehoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlykehoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlykehoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
