import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import Button from '../Button';

interface PokemonCardProps {
  url: string;
  namePokemon: string;
}

const PokemonCard: React.FC<PokemonCardProps> = () => {
  return (
    <Box
      boxSize={['280px', '300px']}
      background="gray.800"
      marginX={['', 'auto']}
      borderRadius="lg"
      transition="all 200ms"
      _hover={{ transform: 'scale(1.1)', borderBottom: '3px solid #2B6CB0' }}
    >
      <Box>
        <Image
          boxSize="180px"
          margin="5px auto"
          src=""
          objectFit="cover"
          alt="image do pokemon teste"
          loading="eager"
        />
        <Flex padding="6" align="center" flexDirection="column">
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            color="gray.300"
            fontSize="lg"
            marginBottom="2"
          >
            teste
          </Text>

          <Button
            padding="3"
            size="sm"
            colorScheme="blue"
            leftIcon={
              <Icon as={IoEllipsisHorizontal} fontSize={['15', '20']} />
            }
          >
            Ver mais
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PokemonCard;
