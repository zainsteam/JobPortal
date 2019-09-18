import {Component, OnInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
declare var $ : any;
declare var c : Number;
declare var d : Boolean;

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  public videosrc:any;
  

    constructor(private sanitizer:DomSanitizer, private element:ElementRef,private router :Router) {
    }

    ngOnInit() {


        (function() {
            var questions = [{
              question: "Can you tell me a little about yourself?",
            }, {
              question: "Where did you hear about this job?",
            }, {
              question: "What do you know about the company?",
            }, {
              question: "Why do you want this job?",
            }, {
              question: "Why do you think, you are the right candidate for this job",
            },{
              question: "What is your greatest professional achievement?",
            },{
              question: "How familiar is you with Programming Languages?",
            },{
              question: "Do you work best alone or with a team?",
            },{
              question: "What development tools have you used?",
            },{
              question: "What languages have you programmed in?",
            },{
              question: "Describe your production deployment process?",
            },{
              question: "What is your salary Expectations?",
            }];
            
            var questionCounter = 0; //Tracks question number
            var selections = []; //Array containing user choices
            var quiz = $('#quiz'); //Quiz div object
            
            // Display initial question
            displayNext();
            
            // Click handler for the 'next' button
            $('#next').on('click', function (e) {
              e.preventDefault();
              
              // Suspend click listener during fade animation
              if(quiz.is(':animated')) {        
                return false;
              }
              // choose();
              
              // If no user selection, progress is stopped
               questionCounter++;
                displayNext();
              // if (isNaN(selections[questionCounter])) {
              //   alert('Please make a selection!');
              // } else {
              //   questionCounter++;
              //   displayNext();
              // }
            });
            
            // Click handler for the 'prev' button
            // $('#prev').on('click', function (e) {
            //   e.preventDefault();
              
            //   if(quiz.is(':animated')) {
            //     return false;
            //   }
            //   choose();
            //   questionCounter--;
            //   displayNext();
            // });
            
            // Click handler for the 'Start Over' button
            // $('#start').on('click', function (e) {
              // e.preventDefault();
                           
              // if(quiz.is(':animated')) {
              //   return false;
              // }
              // questionCounter = 0;
              // selections = [];
              // displayNext();
              // $('#start').hide();
            // });
            
            // Animates buttons on hover
            $('.button').on('mouseenter', function () {
              $(this).addClass('active');
            });
            $('.button').on('mouseleave', function () {
              $(this).removeClass('active');
            });
            
            // Creates and returns the div that contains the questions and 
            // the answer selections
            function createQuestionElement(index) {
              var qElement = $('<div>', {
                id: 'question'
              });
              
              var header = $('<h3>Question ' + (index + 1) + ':</h3>');
              qElement.append(header);
              
              var question = $('<p>').append(questions[index].question);
              qElement.append(question);
              
              // var radioButtons = createRadios(index);
              // qElement.append(radioButtons);

              var allVoices = window.speechSynthesis.getVoices();
              var voices = [];
              for (var i = 0; i < allVoices.length; i++) {
                  if (allVoices[i].default || allVoices[i].lang.substring(0,2) == "en") voices.push(allVoices[i]);
              }
              
            //  setTimeout(speak,10000);
                  var msg = new SpeechSynthesisUtterance();
                  // msg.voice = voices[parseInt(Math.random()*voices.length)]; // Note: some voices don't support altering params
                  msg.volume = 1; // 0 to 1*/
                  msg.rate =0.7; // 0.1 to 10
                  msg.pitch = Math.random()*2; //0 to 2
                  msg.text = questions[index].question;
                  msg.lang = "en-US";
                  /*msg.onend = function(e) {
                      console.log('Finished in ' + event.elapsedTime + ' seconds.');
                  };*/
                  speechSynthesis.speak(msg);


              
              return qElement;
            }
            
            // Creates a list of the answer choices as radio inputs
            // function createRadios(index) {
            //   var radioList = $('<ul>');
            //   var item;
            //   var input = '';
            //   for (var i = 0; i < questions[index].choices.length; i++) {
            //     item = $('<li>');
            //     input = '<input type="radio" name="answer" value=' + i + ' />';
            //     input += questions[index].choices[i];
            //     item.append(input);
            //     radioList.append(item);
            //   }
            //   return radioList;
            // }
            
            // Reads the user selection and pushes the value to an array
            // function choose() {
            //   selections[questionCounter] = +$('input[name="answer"]:checked').val();
            // }
            
            // Displays next requested element
            function displayNext() {
              quiz.fadeOut(function() {
                $('#question').remove();
                
                if(questionCounter < questions.length){
                  // this.router.navigate(['Dashboard/Dashboard/alljobs']);
                  var nextQuestion = createQuestionElement(questionCounter);
                  quiz.append(nextQuestion).fadeIn();
                  if (!(isNaN(selections[questionCounter]))) {
                    
                    $('input[value='+selections[questionCounter]+']').prop('checked', true);
                  }
                            $('#next').show();
          
                  // Controls display of 'prev' button
                  // if(questionCounter === 1){
                  //   $('#prev').show();
                  // } else 
                  if(questionCounter === 0){
                    
                    $('#prev').hide();
                    $('#next').show();
                  }
                }
                else {
                  var scoreElem = EndQuiz();
                  quiz.append(scoreElem).fadeIn();
                  $('#next').hide();
                  // $('#prev').hide();
                  $('#start').show();
                }
              });
            }
            
            // Computes score and returns a paragraph element to be displayed
            function EndQuiz() {
              var score = $('<p>',{id: 'question'});
              
              score.append('<br>Your Interview is Over , Thanks for giving us your precious time');
              return score;
            }
          })();
      


        // camera
        this.showCam();

        
    }

// QUIZ start



// QUiz end


    // camera
    private showCam() {
        // 1. Casting necessary because TypeScript doesn't
        // know object Type 'navigator';
        let nav = <any>navigator;

        // 2. Adjust for all browsers
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;

        // 3. Trigger lifecycle tick (ugly, but works - see (better) Promise example below)
        //setTimeout(() => { }, 100);
        // 4. Get stream from webcam
        nav.getUserMedia(
            {video: true},
            (stream) => {
                let webcamUrl = URL.createObjectURL(stream);

                // 4a. Tell Angular the stream comes from a trusted source
                this.videosrc = this.sanitizer.bypassSecurityTrustUrl(webcamUrl);

                // 4b. Start video element to stream automatically from webcam.
                this.element.nativeElement.querySelector('video').autoplay = true;
            },
            (err) => console.log(err));


        // OR: other method, see http://stackoverflow.com/questions/32645724/angular2-cant-set-video-src-from-navigator-getusermedia for credits
        var promise = new Promise<string>((resolve, reject) => {
            nav.getUserMedia({video: true}, (stream) => {
                resolve(stream);
            }, (err) => reject(err));
        }).then((stream) => {
            let webcamUrl = URL.createObjectURL(stream);
            this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
            // for example: type logic here to send stream to your  server and (re)distribute to
            // other connected clients.
        }).catch((error) => {
            console.log(error);
        });
    }
    route(){
      this.router.navigate(['profile']); 
    }
}
