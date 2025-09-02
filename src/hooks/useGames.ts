import useData from "./useData";


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
const useGames = () => {
  return useData<Game>('/games');
   
}
export default  useGames

