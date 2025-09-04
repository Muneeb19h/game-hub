import { GameQuery } from "../App";
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
const useGames = (gameQuery:GameQuery|null) => {
  return useData<Game>('/games',
    [gameQuery],
    {
      params: {
        genres: gameQuery?.genre?.id,
        platform: gameQuery?.platform?.id
      }
    });
   
}
export default  useGames

