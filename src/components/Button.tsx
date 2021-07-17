import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type ButtonProps = ChakraButtonProps;

const Button: React.FC<ButtonProps> = ({ children, width, ...rest }) => {
  return (
    <ChakraButton
      width={width}
      background="blue.500"
      _hover={{ background: 'blue.600' }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
