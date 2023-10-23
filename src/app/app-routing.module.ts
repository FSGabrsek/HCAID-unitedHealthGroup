import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './features/page-home/page-home.component';
import { PageDisclaimerComponent } from './features/page-disclaimer/page-disclaimer.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PageHomeComponent },
    { path: 'disclaimer', component: PageDisclaimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
