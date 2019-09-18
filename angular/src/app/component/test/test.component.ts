import { Component, OnInit } from '@angular/core';

declare var  counter:any;
declare var intervalId:any;
declare var $:any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public videosrc:any;
 
  constructor() { 

    
    
  }

  ngOnInit() { 
    function finish() {
      clearInterval(intervalId);
      document.getElementById("bip").innerHTML = "THE END!";	
    }
    function bip() {
        if(counter == 0) finish();
        else {
            document.getElementById("bip").innerHTML = counter + " seconds remaining";
        }
        counter--;
    }
    function start() {  intervalId = setInterval(bip, 1000);
    }	    
   
}

 counter = 30;
intervalId = null;

}