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
const useGames = (selectedGenre:Genre|null,selectedPlatform:Platform|null) => {
  return useData<Game>('/games', [selectedGenre?.id,selectedPlatform?.id], { params: { genres: selectedGenre?.id ,platform:selectedPlatform?.id} });
   
}
export default  useGames

