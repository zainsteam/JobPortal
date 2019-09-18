import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgregisterComponent } from './orgregister.component';

describe('OrgregisterComponent', () => {
  let component: OrgregisterComponent;
  let fixture: ComponentFixture<OrgregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
