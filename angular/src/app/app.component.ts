import { Component, OnInit } from '@angular/core';
declare var $ : any;
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('load', function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
    });
    
  }

}

