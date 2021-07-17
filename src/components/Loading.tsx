import { Flex, Spinner } from '@chakra-ui/react';

const Loading: React.FC = () => {
  return (
    <Flex height="100%" justify="center" align="center">
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loading;
