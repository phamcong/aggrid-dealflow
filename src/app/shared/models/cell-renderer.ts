import { ICellRendererParams } from "ag-grid-community";
import { ActionListItem } from "./action";

export interface IActionCellRendererParams extends ICellRendererParams {
    actions: ActionListItem[]
}