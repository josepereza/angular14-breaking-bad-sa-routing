import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingService } from './breaking.service';
import { BreakingCardComponent } from './breaking-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-breaking-list',
  standalone: true,
  imports: [CommonModule, BreakingCardComponent],
  template: `

  <div   class="container">
<app-breaking-card (click)="details(item.char_id)" *ngFor="let item of personajes" [personaje]=item></app-breaking-card>

  </div>
    
  `,
  styles: [
    `
    .container{
      width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-gap: 15px;
    text-align: center;
    }
    `
  ]
})
export class BreakingListComponent implements OnInit {
personajes:any[]=[]
  constructor(private breakingService:BreakingService, private router:Router) { }

  ngOnInit(): void {
    this.breakingService.getPersonajes().subscribe(data=>{
      this.personajes=data;
    })
  }
details(id:any){
  this.router.navigate(['details',id])

}
}
