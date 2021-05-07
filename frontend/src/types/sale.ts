import { Seller } from "./seller"

export type SaleSum =  {
    sellerName: string,
    sum: number
}

export type SaleSucess = {
  sellerName: string,
  visited: number,
  deals: number
}

export type Sale = {
  id: number,
  visited: number,
  deals: number,
  amount: number,
  date: string,
  seller: Seller
}

export type SalePage = {
  content?: Sale[],
  last: boolean,
  totalElements: number,
  totalPages: number,
  number: number,
  size?: number,
  first: boolean,
  numberOfElements?: number,
  empty?: boolean
}