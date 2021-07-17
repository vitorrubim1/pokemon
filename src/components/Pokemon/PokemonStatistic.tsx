import { Stack, Progress, Text, Tooltip } from '@chakra-ui/react';

interface PokemonStatisticProps {
  value: number;
  statistic: string;
}

const PokemonStatistic: React.FC<PokemonStatisticProps> = ({
  statistic,
  value,
}) => {
  return (
    <Tooltip
      label={`${value} / 200`}
      aria-label="A tooltip with value"
      placement="right-end"
      background="gray.400"
    >
      <Stack padding="3" spacing="1">
        <Text
          fontWeight="bold"
          color="gray.300"
          fontSize="md"
          textTransform="capitalize"
        >
          {statistic}
        </Text>
        <Progress colorScheme="blue" size="sm" value={value} />
      </Stack>
    </Tooltip>
  );
};

export default PokemonStatistic;
