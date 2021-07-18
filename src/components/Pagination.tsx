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
      width="210px"
    >
      {pokemons && previousUrl && (
        <Button onClick={handlePreviousPage} minWidth="100px">
          Previous
        </Button>
      )}
      {nextUrl && (
        <Button onClick={handleNextPage} minWidth="100px">
          Next
        </Button>
      )}
    </Flex>
  );
};

export default Pagination;
