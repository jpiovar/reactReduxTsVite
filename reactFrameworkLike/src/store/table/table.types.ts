export interface TableType {
  data: any;
  loading: boolean;
  error: any;
}

export type TableTypeEmpty = Record<symbol, never> | never;
