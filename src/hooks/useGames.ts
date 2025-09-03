import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform  {
  id: number;
  name: string;
  slug: string;
};
type ParentPlatforms = {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms?: ParentPlatforms[];
  metacritic:number
}
const useGames = (selectedGenre:Genre|null) => {
  return useData<Game>('/games', [selectedGenre?.id], { params: { genres: selectedGenre?.id } });
   
}
export default  useGames

