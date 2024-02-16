//manuel slide skift m btn
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 0;

const manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

//automatisk slide skift
var repeat = function() {
    var slidesArray = Array.from(slides);
    var btnsArray = Array.from(btns);

  var repeater = () => {
    setTimeout(function () {
      slidesArray[currentSlide].classList.remove('active');
      btnsArray[currentSlide].classList.remove('active');

      if (currentSlide >= slidesArray.length - 1) {
        currentSlide = 0; //reset to  first slide
      } else {
        currentSlide++; //increment to next slide
      }

      slidesArray[currentSlide].classList.add('active');
      btnsArray[currentSlide].classList.add('active');
      repeater();
    }, 9000);
  };
  repeater();
}

repeat();


