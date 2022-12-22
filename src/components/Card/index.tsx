import { Flex, Image, Text } from '@chakra-ui/react';

interface CardProps {
  image: any;
  name: any;
}

function Card({ image, name }: CardProps) {
  return (
    <Flex
      direction="column"
      as="div"
      p="40px"
      bg="#f4f4f4"
      w="300px"
      align="center"
      cursor="pointer"
      borderRadius={8}
    >
      <Image
        src={image}
        alt={name}
        h={200}
        style={{ imageRendering: 'pixelated' }}
      />
      <Text
        size="32px"
        textTransform="uppercase"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Flex>
  );
}

export default Card;