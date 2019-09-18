import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.css']
})
export class QuestionbankComponent implements OnInit {
  public qb = 'QuestionBank';
  public formSubmit( Data: any ): void {
    console.log('DATA' , Data );  
      }
  constructor() { }

  ngOnInit() {
  }

}
