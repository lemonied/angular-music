import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./views/home/home.module').then(res => res.HomeModule)
}, {
  path: 'singer',
  loadChildren: () => import('./views/singers/singers.module').then(res => res.SingersModule)
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
