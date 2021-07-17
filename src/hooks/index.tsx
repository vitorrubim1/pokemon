import { ModalProvider } from './modal';
import { PokemonProvider } from './pokemon';

const AppProvider: React.FC = ({ children }) => {
  return (
    <PokemonProvider>
      <ModalProvider>{children}</ModalProvider>
    </PokemonProvider>
  );
};

export default AppProvider;
