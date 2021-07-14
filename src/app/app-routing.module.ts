import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelineComponent } from './components/pipeline/pipeline.component';

const routes: Routes = [
  { path: 'pipeline', component: PipelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
