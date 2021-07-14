import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { PipelineGridComponent } from './components/pipeline/pipeline-grid/pipeline-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActionCellRenderer } from './shared/components/action-cell-renderer/action-cell-renderer.component';

const entryComponents = [
  ActionCellRenderer
]

@NgModule({
  declarations: [
    AppComponent,
    PipelineComponent,
    PipelineGridComponent,
    ...entryComponents
  ],
  entryComponents: entryComponents,
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
