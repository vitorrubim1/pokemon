import { PokemonProvider } from './pokemon';

const AppProvider: React.FC = ({ children }) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default AppProvider;
