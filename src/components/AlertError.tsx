import { Alert, AlertIcon } from '@chakra-ui/react';

interface AlertErrorProps {
  label: string;
}

const AlertError: React.FC<AlertErrorProps> = ({ label }) => {
  return (
    <Alert
      status="error"
      maxWidth={['300px', '502px']}
      marginX={['start', 'auto']}
      color="red.800"
      type="red"
    >
      <AlertIcon />
      {label}
    </Alert>
  );
};

export default AlertError;
