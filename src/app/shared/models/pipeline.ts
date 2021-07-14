export interface PipelineListItem {
  fundName: string
  gpName?: string
  interest: string
  phase: string
  ddLevel: string
  expectedStartDate: string | Date
  expectedCloseDate: string | Date
  targetFundSize: number
  ccy: string
  initialTargetAllocation: number
  overSubscribed?: boolean
  region: string
  mainRegionFocus: string
  country: string
  allocations: string[]
}