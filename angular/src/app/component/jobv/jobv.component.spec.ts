import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobvComponent } from './jobv.component';

describe('JobvComponent', () => {
  let component: JobvComponent;
  let fixture: ComponentFixture<JobvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
