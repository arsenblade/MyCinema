import { ReactNode } from "react"

export interface ISeo {
  title: string,
  children: ReactNode,
  description?: string,
  image?: string
}