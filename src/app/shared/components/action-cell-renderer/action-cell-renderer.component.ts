import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ActionListItem } from '../../models/action';
import { IActionCellRendererParams } from '../../models/cell-renderer';

@Component({
  templateUrl: './action-cell-renderer.component.html'
})
export class ActionCellRenderer implements AgRendererComponent {
  actions: ActionListItem[] = []

  agInit(params: IActionCellRendererParams): void {
    this.actions = params.actions
  }

  refresh = () => true
}
