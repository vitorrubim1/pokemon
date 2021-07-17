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

import PokemonLogo from '../../assets/pokemonLogo.png';

import SearchInput from '../../components/SearchInput';
import PokemonCard from '../../components/Pokemon/PokemonCard';
import AlertError from '../../components/AlertError';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

const Pokemon: React.FC = () => {
  const pokemons = ['teste', 'teste', 'teste', 'teste', 'teste'];

  return (
    <Flex
      width="100%"
      margin="10px auto"
      paddingX="6"
      flexDirection="column"
      maxWidth="1480px"
    >
      <BackButton to="/" />
      <Box width="300px" marginX="auto" marginBottom="5" cursor="pointer">
        <Image src={PokemonLogo} alt="Logo do pokemon" />
      </Box>

      <InputGroup as="form" size="lg" marginX="auto" maxWidth="500px">
        <SearchInput placeholder="Procurar por um pokemon" />

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
        <SimpleGrid gap={['3', '6']} minChildWidth="320px" paddingBottom="10">
          {false && (
            <AlertError label="Não conseguimos encontrar este pokemon, tente novamente." />
          )}

          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon} url={pokemon} namePokemon={pokemon} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Pokemon;
