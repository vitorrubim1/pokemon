import { Input, InputProps } from '@chakra-ui/react';

interface SearchInputProps extends InputProps {
  placeholder: string;
  type?: 'string' | 'number';
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  type,
  ...rest
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      required
      variant="filled"
      bgColor="gray.800"
      border="1px solid gray.900  "
      _hover={{ background: 'gray.900', border: '1px solid #2B6CB0' }}
      {...rest}
    />
  );
};

export default SearchInput;
