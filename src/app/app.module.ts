import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes, RouterModule } from '@angular/router';
import '../jquery.js';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BlockComponent } from './block/block.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NfComponent } from './nf/nf.component';
import { NavbarComponent } from './navbar/navbar.component'

const appRoutes:Routes = [
  {
    path: '',
    component: CardComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'block',
    component: BlockComponent
  },
  {
    path: '**',
    component: NfComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BlockComponent,
    MainComponent,
    NfComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
