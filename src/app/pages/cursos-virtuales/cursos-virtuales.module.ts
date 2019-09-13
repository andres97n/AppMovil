import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CursosVirtualesPage } from './cursos-virtuales.page';

const routes: Routes = [
  {
    path: '',
    component: CursosVirtualesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CursosVirtualesPage]
})
export class CursosVirtualesPageModule {}
