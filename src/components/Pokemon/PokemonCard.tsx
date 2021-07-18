import { useCallback, useEffect, useState } from 'react';
import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react';
import { GoInfo } from 'react-icons/go';

import { usePokemon } from '../../hooks/pokemon';
import { useModal } from '../../hooks/modal';

import ModalPokemonDetails from './ModalPokemonDetails';
import Button from '../Button';
import Loading from '../Loading';

interface PokemonCardProps {
  url: string;
  namePokemon: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ namePokemon, url }) => {
  const { handleOpenModal } = useModal();
  const { loading } = usePokemon();

  const [pokemonID, setPokemonID] = useState(0);

  const handleSetValues = useCallback(() => {
    setPokemonID(Number(url.split('/')[url.split('/').length - 2]));
  }, [url]);

  useEffect(() => {
    handleSetValues();
  }, [pokemonID, handleSetValues]);

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`;

  return (
    <Box
      boxSize={['280px', '300px']}
      background="gray.800"
      marginX={['', 'auto']}
      borderRadius="lg"
      transition="all 200ms"
      _hover={{
        transform: 'scale(1.1)',
        borderBottom: '3px solid #2B6CB0',
        backgroundColor: 'gray.500',
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Image
            height="200px"
            margin="5px auto"
            src={image}
            objectFit="cover"
            alt={`image do pokemon ${namePokemon}`}
            loading="eager"
          />
          <Flex paddingY="1" align="center" flexDirection="column">
            <Text
              fontWeight="bold"
              textTransform="capitalize"
              color="gray.100"
              fontSize="lg"
              marginBottom="2"
            >
              {namePokemon}
            </Text>

            <Button
              onClick={() => handleOpenModal(Number(pokemonID))}
              padding="3"
              size="sm"
              colorScheme="blue"
              rightIcon={<Icon as={GoInfo} fontSize={['10', '15']} />}
            >
              View more
            </Button>
          </Flex>
          <ModalPokemonDetails />
        </Box>
      )}
    </Box>
  );
};

export default PokemonCard;
