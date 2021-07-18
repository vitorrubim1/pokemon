import { useEffect, useCallback, useState } from 'react';
import {
  Flex,
  Box,
  SimpleGrid,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

import { usePokemon } from '../../hooks/pokemon';

import PokemonLogo from '../../assets/pokemonLogo.png';

import SearchInput from '../../components/SearchInput';
import PokemonCard from '../../components/Pokemon/PokemonCard';
import Pagination from '../../components/Pagination';
import AlertError from '../../components/AlertError';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

const Pokemon: React.FC = () => {
  const { handleLoadingPokemons, pokemons, wantedPokemon, error } =
    usePokemon();

  useEffect(() => {
    handleLoadingPokemons();
  }, [handleLoadingPokemons]);

  const { handleSearchPokemon } = usePokemon();

  const [researchedPokemon, setResearchedPokemon] = useState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      handleSearchPokemon(researchedPokemon);
    },
    [researchedPokemon, handleSearchPokemon],
  );

  return (
    <Flex
      width="100%"
      margin="10px auto"
      paddingX="6"
      flexDirection="column"
      maxWidth="1480px"
    >
      <BackButton to="/" />
      <Box
        width="300px"
        marginX="auto"
        marginBottom="5"
        cursor="pointer"
        onClick={handleLoadingPokemons}
      >
        <Image src={PokemonLogo} alt="Logo do pokemon" />
      </Box>

      <InputGroup
        as="form"
        size="lg"
        marginX="auto"
        maxWidth="500px"
        onSubmit={handleSubmit}
      >
        <SearchInput
          value={researchedPokemon}
          onChange={event =>
            setResearchedPokemon(event.target.value.trim().toLocaleLowerCase())
          }
          placeholder="Search for a pokemon"
        />

        <InputRightElement>
          <Button size="md" height="1.75rem" marginRight="4" type="submit">
            <IconButton
              background="transparent"
              aria-label="procurar pokemons"
              _hover={{ background: 'transparent' }}
              icon={<AiOutlineSearch />}
            />
          </Button>
        </InputRightElement>
      </InputGroup>

      <Flex
        as="section"
        flexDirection="column"
        margin="30px auto"
        padding="4"
        height="83vh"
        width="100%"
      >
        <Box margin="0 auto 30px auto">
          <Pagination />
        </Box>

        <SimpleGrid gap={['3', '6']} minChildWidth="320px" paddingBottom="10">
          {wantedPokemon && (
            <PokemonCard
              key={wantedPokemon.name}
              url={wantedPokemon.species.url}
              namePokemon={wantedPokemon.name}
            />
          )}

          {error && (
            <AlertError label="Não conseguimos encontrar este pokemon, tente novamente." />
          )}

          {!error &&
            !wantedPokemon &&
            pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                url={pokemon.url}
                namePokemon={pokemon.name}
              />
            ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Pokemon;
