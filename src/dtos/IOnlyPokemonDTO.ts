export interface IOnlyPokemonDTO {
  name: string;
  image: string;
  abilities: [{ ability: { name: string } }];
  stats: [{ base_stat: number; stat: { name: string } }];
  id: number;
  species: {
    url: string;
  };
}
