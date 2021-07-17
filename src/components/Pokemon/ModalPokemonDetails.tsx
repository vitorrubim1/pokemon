import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Avatar,
  Badge,
  Box,
  Flex,
} from '@chakra-ui/react';

import { useModal } from '../../hooks/modal';
import { usePokemon } from '../../hooks/pokemon';

import PokemonStatistic from './PokemonStatistic';

const ModalPokemonDetails: React.FC = () => {
  const { isOpen, handleCloseModal } = useModal();
  const { pokemonDetail } = usePokemon();

  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={handleCloseModal}
      isOpen={isOpen}
      isCentered
      colorScheme="gray"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent bgColor="gray.700">
        <ModalHeader
          display="flex"
          flexDirection="column"
          textTransform="capitalize"
        >
          {pokemonDetail?.name}
          <Box>
            {pokemonDetail?.abilities.map(ability => (
              <Badge colorScheme="blue" marginRight="3">
                {ability.ability.name}
              </Badge>
            ))}
          </Box>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex align="center" justify="space-between">
            <Avatar
              size="2xl"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetail?.id}.svg`}
              name={pokemonDetail?.name}
            />

            <Flex flexDirection="column" width="90%">
              {pokemonDetail?.stats.map(statistic => (
                <PokemonStatistic
                  value={statistic.base_stat}
                  statistic={statistic.stat.name}
                />
              ))}
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default ModalPokemonDetails;
