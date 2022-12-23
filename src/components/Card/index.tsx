import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import ModalComponent from '../Modal';

interface CardProps {
  image: string;
  name: string;
  id: number;
}

function CardComponent({ image, name, id }: CardProps) {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Card variant="outline" alignItems="center">
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        name={name}
      />
      <CardBody>
        <Image
          src={image}
          alt={name}
          h={200}
          style={{ imageRendering: 'pixelated' }}
          bgColor="yellow.50"
          borderRadius="lg"
        />
        <Text
          pt="5"
          size="32px"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="bold"
        >
          {id} - {name}
        </Text>
      </CardBody>
      <CardFooter>
        <Button
          onClick={
            () => onOpen()
          }
        >
          More Info
        </Button>
      </CardFooter>
    </Card >
  );
}

export default CardComponent;