import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path:'video',
    component:VideoComponent,
  },
  {
    path:'book',
    component:BookComponent,
  },
  {
    path:'about',
    component:AboutComponent,

  },
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
