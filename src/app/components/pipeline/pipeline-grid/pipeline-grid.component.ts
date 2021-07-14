import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClassParams, GridOptions, ICellRendererParams, RowClickedEvent, RowDoubleClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ActionCellRenderer } from 'src/app/shared/components/action-cell-renderer/action-cell-renderer.component';
import { ActionListItem } from 'src/app/shared/models/action';
import { PipelineListItem } from 'src/app/shared/models/pipeline';
import { PipelineService } from '../pipeline.service';

@Component({
  selector: 'app-pipeline-grid',
  templateUrl: './pipeline-grid.component.html',
  styleUrls: ['./pipeline-grid.component.scss']
})
export class PipelineGridComponent implements OnInit {
  pipelineGridOptions: GridOptions = {}
  pipeline$!: Observable<PipelineListItem[]>;
  quickSearchTerm!: string


  @ViewChild('pipelineGrid') pipelineGrid!: AgGridAngular

  constructor(private _pipelineService: PipelineService) {
    this.pipeline$ = this._pipelineService.pipelines$
  }

  ngOnInit(): void {
    this.pipelineGridOptions = {
      columnDefs: [
        { field: 'fundName', checkboxSelection: true },
        { field: 'gpName' },
        {
          field: 'interest',
          cellClassRules: {
            'fw-bold': (params: CellClassParams) => params.value === 'high'
          }
        },
        { field: 'phase' },
        { field: 'ddLevel' },
        { field: 'expectedStartDate' },
        { field: 'expectedCloseDate' },
        { field: 'targetFundSize' },
        { field: 'ccy' },
        { field: 'initialTargetAllocation' },
        { field: 'overSubscribed' },
        { field: 'region' },
        { field: 'mainRegionFocus' },
        { field: 'country' },
        {
          field: 'allocations',
          cellRenderer: 'actionCellRenderer',
          cellClass: ['d-flex align-items-center justify-content-start'],
          cellRendererParams: (params: ICellRendererParams) => {
            console.log(params.value)
            return {
              actions: params.value.map((item: string) => <ActionListItem>{
                label: item,
                bg: 'danger'
              })
            }
          }
        }
      ],
      rowSelection: 'single',
      onRowDoubleClicked: ($event: RowDoubleClickedEvent) => {
        alert('Clicked on ' + $event.data && $event.data.fundName)
      },
      headerHeight: 30,
      defaultColDef: { headerClass: ['bg-info'] },
      frameworkComponents: {
        actionCellRenderer: ActionCellRenderer
      },
      onFirstDataRendered: (params) => params.columnApi.autoSizeAllColumns()
    }
  }

  onChangeQuickSearch = ($event: string) => {
    console.log($event)
    if (this.pipelineGrid && this.pipelineGrid.api) {
      this.pipelineGrid.api.setQuickFilter($event)
    }
  }

}
