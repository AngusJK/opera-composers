import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposersComponent } from './composers/composers.component';
import { OperaItemComponent } from './opera-item/opera-item.component';
import { OperasComponent } from './operas/operas.component';

const routes: Routes = [
  { path: 'operas', component: OperasComponent },
  { path: 'composers', component: ComposersComponent },
  { path: 'operas/:id', component: OperaItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
