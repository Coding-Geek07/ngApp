import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentsComponent } from './consents/consents.component';
import { usageComponent } from './usage/usage.component';


const routes: Routes = [
  { path: '', redirectTo: 'consent', pathMatch: 'full' },
  // { path: 'consent', component: ConsentsComponent },
  { path: 'usage', component: usageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
