export interface IQueryParams {
  page?: number
  limit?: number
  search?: string | number
  sortField?: string
  sortType?: string
  [key: string]: any
}

export interface IResponseList<T = any> {
  data: T
  page: number
  total: number
  limit: number
}

export interface IAPIResponse<T = any> {
  code?: number
  message?: string
  data?: T
}

export interface IAPIResponseList<T> {
  code?: number
  message?: string
  data?: T
  page?: number
  total?: number
}

export type TAxiosResponse<T = any> = Promise<IAPIResponse<T>>
export type TAxiosResponseList<T = any> = Promise<IAPIResponseList<T>>
