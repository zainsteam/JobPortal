import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbankComponent } from './questionbank.component';

describe('QuestionbankComponent', () => {
  let component: QuestionbankComponent;
  let fixture: ComponentFixture<QuestionbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
