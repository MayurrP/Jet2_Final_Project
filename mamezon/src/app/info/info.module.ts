import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent}
      ]
    ),
  ]
})
export class InfoModule { }
