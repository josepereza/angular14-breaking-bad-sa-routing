import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreakingService } from './breaking.service';

@Component({
  selector: 'app-breaking-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
    <img src="{{personaje.img}}"  alt="">
     <div class="texto">
      <h2>{{personaje.name}}</h2>
      <p>{{personaje.nickname}}</p>
      <p>{{personaje.occupation}}</p>
     </div>

    </div>
  `,
  styles: [
    `
    img{
      width:60%;
      max-width:500px;
    }
    .container{
      height:100vh;
      width:80%;
      display:flex;
      justify-content:center;
      align-items:center;
      justify-items:center;
      margin:auto;
      
    }
    .texto {
      text-align:center;
      margin:auto;
     
    }

    
    `
  ]
})
export class BreakingDetailsComponent implements OnInit {
personaje:any=""
  constructor(private route: ActivatedRoute, private breakingService:BreakingService) { }

  ngOnInit(): void {

    const personajeId = this.route.snapshot.paramMap.get('id');
    this.breakingService.getPersonaje(personajeId).subscribe((data:any)=>{
    
      this.personaje=data[0]
    })

  }

}
