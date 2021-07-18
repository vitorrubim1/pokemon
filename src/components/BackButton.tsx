import { useCallback } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

interface GoBackProps {
  to: string;
}

const GoBack: React.FC<GoBackProps> = ({ to }) => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.push(`${to}`);
  }, [to, history]);

  return (
    <Flex
      align="center"
      width="8.5rem"
      cursor="pointer"
      marginTop="5"
      onClick={handleGoBack}
    >
      <Icon as={HiOutlineArrowNarrowLeft} size={25} color="blue.500" />
      <Text fontWeight="bold" color="blue.500" fontSize="larger" marginLeft="3">
        Come back
      </Text>
    </Flex>
  );
};

export default GoBack;
