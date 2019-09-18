import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcontentComponent } from './hcontent.component';

describe('HcontentComponent', () => {
  let component: HcontentComponent;
  let fixture: ComponentFixture<HcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
