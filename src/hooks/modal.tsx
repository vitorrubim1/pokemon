import { useState, useCallback, createContext, useContext } from 'react';

import { usePokemon } from './pokemon';

interface ModalContextData {
  isOpen: boolean;
  handleCloseModal(): void;
  handleOpenModal(pokemonID: number): void;
}

export const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const { handlePokemonDetails } = usePokemon();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(
    (pokemonID: number) => {
      setIsOpen(true);

      handlePokemonDetails(pokemonID);
    },
    [handlePokemonDetails],
  );

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        // states
        isOpen,

        // functions
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
