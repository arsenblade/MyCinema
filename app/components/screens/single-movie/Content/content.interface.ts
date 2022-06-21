import { IMovie } from "@/shared/types/movie.types"

export interface ILink {
  _id: string,
  link: string,
  title: string
}

export interface IContentList {
  name: string,
  links: ILink[],
}

export interface IContent {
  movie: IMovie
}