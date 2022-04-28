import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResDComponent } from './res-d.component';

describe('ResDComponent', () => {
  let component: ResDComponent;
  let fixture: ComponentFixture<ResDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
