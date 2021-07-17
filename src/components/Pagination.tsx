import { Flex } from '@chakra-ui/react';

import { usePokemon } from '../hooks/pokemon';

import Button from './Button';

const Pagination: React.FC = () => {
  const { handleNextPage, handlePreviousPage, pokemons, previousUrl, nextUrl } =
    usePokemon();

  return (
    <Flex
      justify={previousUrl ? 'space-between' : 'center'}
      align="center"
      width="200px"
    >
      {pokemons && previousUrl && (
        <Button onClick={handlePreviousPage}>Anterior</Button>
      )}
      {nextUrl && <Button onClick={handleNextPage}>Próximo</Button>}
    </Flex>
  );
};

export default Pagination;
