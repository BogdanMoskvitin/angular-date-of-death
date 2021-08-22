import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndComponent } from './end/end.component';
import { FifthQuestionComponent } from './fifth-question/fifth-question.component';
import { FourthQuestionComponent } from './fourth-question/fourth-question.component';
import { HomeComponent } from './home/home.component';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'second-question', component: SecondQuestionComponent },
  { path: 'third-question', component: ThirdQuestionComponent },
  { path: 'fourth-question', component: FourthQuestionComponent },
  { path: 'fifth-question', component: FifthQuestionComponent },
  { path: 'end', component: EndComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
