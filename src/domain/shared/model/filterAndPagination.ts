export interface Filter {
  search?: string;
}

export interface Pagination {
  page?: number;
}

export interface FilterAndPaginateType extends Filter, Pagination {}
