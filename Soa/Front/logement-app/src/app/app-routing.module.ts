import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementAddComponent } from './logement-add/logement-add.component';

const routes: Routes = [
  { path: 'add-logement', component: LogementAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
