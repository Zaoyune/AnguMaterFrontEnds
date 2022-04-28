import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultCComponent } from './adult-c.component';

describe('AdultCComponent', () => {
  let component: AdultCComponent;
  let fixture: ComponentFixture<AdultCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
