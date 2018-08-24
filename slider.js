/*
AUTHOR: CodingBobby
DATE: 24/08/2018
VERSION: 1.2
*/

let sliderInit = 1;
let sliders = [];
let k = 0;

$(document).find(".slider").each(function() {
  sliders.push({
    getID: this.id,
    slider: this,
    slides: this.getElementsByClassName("slide"),
    onSlide: sliderInit,
    update: function() {
      this.onSlide = (this.onSlide > this.slides.length) ? 1:this.onSlide;
      this.onSlide = (this.onSlide < 1) ? this.slides.length:this.onSlide;
      for(var i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      }
      this.slides[this.onSlide-1].style.display = "grid";
    }
  });
  sliders[k++].update();
});

function moveSlides(clicked,dir) {
  let s = clicked.closest(".slider");
  let x = sliders.filter(obj => {
    return obj.getID == s.id;
  })[0];
  x.onSlide += dir;
  x.update();
}
