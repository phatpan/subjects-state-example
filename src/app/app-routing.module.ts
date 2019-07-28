import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './layout-nav/side-nav/side-nav.component';
import { ListComponent } from './blog/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      { path: '', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
