import React, { useEffect, useState } from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import axios from 'axios';

interface ModalComponentProps {
  isOpen: any;
  onClose: any;
  name: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose, name }) => {
  const [pokeData, setPokeData] = useState<any>([]);

  const types = pokeData?.types?.map((type: any) => type);
  const algo = types?.map((type: any) => type);
  console.log(algo)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      setPokeData(data);
    })()
  }, [name])

  const Overlay = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  return (
    <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
      <Overlay />
      <ModalContent>
        <ModalHeader textAlign="center">{name.toLocaleUpperCase()}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>Conteúdo</div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='teal' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='outline'>Next Pokemon</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;