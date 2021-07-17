import { useCallback, useState, useContext, createContext } from 'react';

import { IPokemonsDTO } from '../dtos/IPokemonsDTO';
import { IOnlyPokemonDTO } from '../dtos/IOnlyPokemonDTO';

import api from '../services/api';

interface PokemonContextData {
  // states
  pokemons: IPokemonsDTO[];
  wantedPokemon: IOnlyPokemonDTO | undefined;
  pokemonDetail: IOnlyPokemonDTO | undefined;
  previousUrl: string;
  nextUrl: string;
  loading: boolean;
  error: boolean;

  // functions
  handleLoadingPokemons(): void;
  handleNextPage(): void;
  handlePreviousPage(): void;
  handleSearchPokemon(pokemon: string): void;
  handlePokemonDetails(id: number): void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<IPokemonsDTO[]>([]);
  const [pokemonDetail, setPokemonDetails] = useState<IOnlyPokemonDTO>();
  const [wantedPokemon, setWantedPokemon] = useState<IOnlyPokemonDTO>();

  const [previousUrl, setPreviousUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStopLoading = useCallback(() => {
    setTimeout(
      () => {
        setLoading(false);
      },
      200,
      [],
    );
  }, []);

  const handleLoadingPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('https://pokeapi.co/api/v2/pokemon/');

      setPokemons(response.data.results);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
      setWantedPokemon(undefined);
      handleStopLoading();
      setError(false);
    } catch (err) {
      setError(true);
    }
  }, [handleStopLoading]);

  const handleNextPage = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(nextUrl);

      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
      setPokemons(response.data.results);
      handleStopLoading();
    } catch (err) {
      setError(true);
    }
  }, [nextUrl, handleStopLoading]);

  const handlePreviousPage = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get(previousUrl);

      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
      setPokemons(response.data.results);
      handleStopLoading();
    } catch (err) {
      setError(true);
    }
  }, [previousUrl, handleStopLoading]);

  const handleSearchPokemon = useCallback(async (pokemon: string) => {
    try {
      setLoading(true);
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      );

      setWantedPokemon(response.data);
      setNextUrl('');
      setPreviousUrl('');
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(true);
      setNextUrl('');
      setPreviousUrl('');
      setPokemons([]);
      setWantedPokemon(undefined);
      setLoading(false);
    }
  }, []);

  const handlePokemonDetails = useCallback(async (id: number) => {
    try {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`,
      );

      setPokemonDetails(response.data);
    } catch (err) {
      setError(true);
    }
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        // states
        pokemons,
        wantedPokemon,
        pokemonDetail,
        previousUrl,
        nextUrl,
        loading,
        error,

        // functions
        handleLoadingPokemons,
        handleNextPage,
        handlePreviousPage,
        handleSearchPokemon,
        handlePokemonDetails,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }

  return context;
}

export { PokemonProvider, usePokemon };
