import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
   <div class="barra">
   <span>Breaking Bad</span>  
    <a routerLink="/list">Home</a>
   </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .barra{
    width:95%;
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  a{
    color:white;
    outline: none;
  text-decoration: none;
  padding: 2px 1px 0;

  }
 nav{
  width:100%;
   height:50px;
  background-color:red;
  display: flex;
   align-items: center;

 }
 span{
  padding:20px;
  color:white;
  font-size:1.4em;
  }
  `]
})
export class AppComponent {
  title = 'breaking-bad-sa-routing';
}
