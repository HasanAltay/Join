import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { SummaryComponent } from '../summary/summary.component';
import { BoardComponent } from '../board/board.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { InfoComponent } from '../info/info.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { PrivacyComponent } from '../privacy/privacy.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'topbar', component: TopbarComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'board', component: BoardComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'info', component: InfoComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [MainComponent]
})
export class MainModule { }
