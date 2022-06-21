import { IGalleryItem } from "@/components/ui/gallery/gallery.interface";
import { IMovie } from "@/shared/types/movie.types";

export interface ISingleMovie{
  movie: IMovie,
  similarMovies: IGalleryItem[]
}