import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
  t4 = ' Complain Form';

  public Complainform : FormGroup;

  constructor() { 
    this.Complainform= new FormGroup(
      {
        Subject: new FormControl('',[Validators.required]),
        Message: new FormControl('',[Validators.required])
      } 
    );
  }

  ngOnInit() {
  }

  
public formSubmit( ) : void {
  console.log(this.Complainform.value);
    }
    
}
