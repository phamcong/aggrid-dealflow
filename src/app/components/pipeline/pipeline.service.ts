import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { PipelineListItem } from "src/app/shared/models/pipeline";
import { pipelineList } from "./pipeline.utils";

@Injectable({ providedIn: 'root' })
export class PipelineService {
  pipelines$: Observable<PipelineListItem[]>

  constructor() {
    this.pipelines$ = this.getPipelines()
  }

  getPipelines() {
    return of(pipelineList).pipe(delay(1000))
  }
}