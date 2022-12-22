import React, { useEffect, useState } from 'react';
import Api from 'axios';
import { Grid, VStack, Heading, Spinner, Flex, Button, useColorMode, Input } from '@chakra-ui/react';
import Card from '../Card';

interface PokemanProps {
  name: string;
  apiUrl: string;
  id: number;
  type: string;
  image: string;
}

export function Pokeman() {

  const [data, setData] = useState<any>(null);
  const [query, setQuery] = useState<string>("");

  const { colorMode, toggleColorMode } = useColorMode()

  const pokeman = data?.results?.map((result: any, index: number) =>
  ({
    name: result.name,
    apiURL: result.url,
    id: index + 1,
    type: result.type,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }));


  console.log(pokeman);

  const listPokemon = pokeman?.filter((pokeman: PokemanProps) => pokeman.name.toLowerCase().includes(query))?.map((pokeman: PokemanProps) => {
    return <Card key={pokeman.id} image={pokeman.image} name={pokeman.name} />
  })

  // const searchPokemon = () => {
  //   const filter = data?.results.filter((pokeman: any) => pokeman.name.toLowerCase().includes(query));
  //   console.log(pokemon);
  // };

  useEffect(() => {
    (async () => {
      const { data } = await Api.get('https://pokeapi.co/api/v2/pokemon?limit=800');
      setData(data);
    })()
  }, []);

  return (
    <VStack spacing={10} pt={8}>
      <Button onClick={toggleColorMode}>
        Mudar Cor de fundo {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Heading as="h2" color="white" textTransform="uppercase">Your list of Pokémon!</Heading>
      <Input type="text" color="white" placeholder='Procure seu pokemon' onChange={(e: any) => setQuery(e.target.value)} />
      {
        data === null ? (
          <Flex justify="center" align="center" pt="300px">
            <Spinner size="xl" color="white" ml="4" />
          </Flex>
        ) : (
          <Grid templateColumns="repeat(5, 1fr)" gap={18}>
            {/* <Grid templateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap={18}> */}
            {listPokemon}
          </Grid>
        )
      }

    </VStack>

  )
}

// export async function getServerSideProps() {
//   const { data } = await Api.get('https://pokeapi.co/api/v2/pokemon?limit=700');
//   console.log(data);
//   return {
//     props: {
//       pokeman: data
//     }
//   };
// }
