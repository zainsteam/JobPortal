import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any;

declare var jQuery : any;
@Component({
  selector: 'app-hcontent',
  templateUrl: './hcontent.component.html',
  styleUrls: ['./hcontent.component.css']
})
export class HcontentComponent implements OnInit {

  constructor(public router:Router) {
    
   }

  ngOnInit() {
    (function($){
      "use strict";
    });
      // Preloader 
      jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
      });
      
      // on ready function
      jQuery(document).ready(function($) {
      var $this = $(window);
    
    });
      //show hide login form js
      $('#search_button').on("click", function(e) {
        $('#search_open').slideToggle();
        e.stopPropagation(); 
      });
    
      $(document).on("click", function(e){
        if(!(e.target.closest('#search_open'))){	
          $("#search_open").slideUp();   		
        }
       });
         
       
       
       // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {       
            $('#return-to-top').fadeIn(200);   
        } else {
            $('#return-to-top').fadeOut(200);  
        }
    });
    
    $('#return-to-top').on('click', function() {     
        $('body,html').animate({
            scrollTop : 0                
        });
    });
  } 

  orgregister(){
    this.router.navigate(['Orglogin']);
  }

  register(){
    this.router.navigate(['Register']);
  }
}