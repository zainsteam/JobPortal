import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashitemComponent } from './dashitem.component';

describe('DashitemComponent', () => {
  let component: DashitemComponent;
  let fixture: ComponentFixture<DashitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
