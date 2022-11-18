import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreakingListComponent } from './breaking-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'list'},
  {path:'list', component:BreakingListComponent},
  {path: 'details/:id', loadComponent: () => import('./breaking-details.component').then(m => m.BreakingDetailsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
