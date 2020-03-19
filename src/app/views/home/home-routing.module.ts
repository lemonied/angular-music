import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {DetailComponent} from './detail/detail.component';
import {NgModule} from '@angular/core';
import {RouterAnimationModule} from '../../components/router-animation/router-animation.module';
import {LayoutModule} from '../../components/layout/layout.module';
import {ScrollYModule} from '../../components/scroll-y/scroll-y.module';
import {LazyModule} from '../../directives/lazy/lazy.module';
import {SliderModule} from '../../components/slider/slider.module';
import {MusicListModule} from '../../business/music-list/music-list.module';
import {CoverListModule} from '../../business/cover-list/cover-list.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: ':id',
    component: DetailComponent
  }]
}];

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterAnimationModule,
    LayoutModule,
    ScrollYModule,
    LazyModule,
    SliderModule,
    MusicListModule,
    RouterModule.forChild(routes),
    CoverListModule
  ],
  exports: [
    HomeComponent,
    DetailComponent
  ]
})
export class HomeRoutingModule {
}
