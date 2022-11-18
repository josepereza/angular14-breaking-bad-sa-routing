import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breaking-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container" >
<img src="{{personaje.img}}" width="100%"  alt="">
<span>{{personaje.name}}</span>
</div>
  `,
  styles: [
    `
    .container{
      height:100%;
      min-height:300px;
    max-height: 1100px;
    background-color: bisque;
    box-shadow: 20px;
    -webkit-box-shadow: 6px 6px 14px 0px rgba(0,0,0,0.58);
-moz-box-shadow: 6px 6px 14px 0px rgba(0,0,0,0.58);
box-shadow: 6px 6px 14px 0px rgba(0,0,0,0.58);
border-radius: 27px 27px 27px 27px;
-moz-border-radius: 27px 27px 27px 27px;
-webkit-border-radius: 27px 27px 27px 27px;
border: 2px groove #000000;
padding: 5px;

    }
    `
  ]
})
export class BreakingCardComponent implements OnInit {
  @Input() personaje:any;

  constructor() { }

  ngOnInit(): void {
  }

}
