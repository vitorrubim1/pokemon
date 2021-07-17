import { Flex, Text, Link } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import Button from './components/Button';

export const App: React.FC = () => {
  const history = useHistory();

  return (
    <Flex height="100vh" width="100vw" align="center" justify="center">
      <Flex
        width={['90%', '100%']}
        maxWidth="370px"
        background="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Flex flexDirection="column" width="100%" textAlign="center">
          <Text fontSize="xl">Teste frontend desenvolvido por</Text>
          <Text as="strong">
            <Link href="https://github.com/vitorrubim1" target="__blank">
              Vitor Rubim
            </Link>
            ❤️
          </Text>
        </Flex>

        <Flex justify="space-between">
          <Button
            width="100%"
            marginTop="6"
            onClick={() => history.push('pokemon')}
          >
            Visualizar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
