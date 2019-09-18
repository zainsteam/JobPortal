import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashitemComponent } from './userdashitem.component';

describe('UserdashitemComponent', () => {
  let component: UserdashitemComponent;
  let fixture: ComponentFixture<UserdashitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
