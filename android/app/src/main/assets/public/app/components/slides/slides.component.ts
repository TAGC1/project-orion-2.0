import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  slideOpts = {
    nitialSlide: 0,
 slidesPerView: 1,
 autoplay:true
    };


  constructor() { }

  ngOnInit() {}

}
