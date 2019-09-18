import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit() {
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

}
