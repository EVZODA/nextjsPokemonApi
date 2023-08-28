import { useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next";
import { NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { Mainlayout } from "../../../components/layouts"
import { pokeApi } from "../../../api";
import { Pokemon, Pokemonlistresponse } from "../../../interfaces";
import { Sprites } from '../../../interfaces/pokemon-full'
import { getPokemonInfo, localFavorites } from "../../../utils";


interface Props {
  pokemon:Pokemon
}



export const PokemonByNamePage : NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.exitsinFavorites(pokemon.id))

  const onTooglefavorite = () => {
   localFavorites.toogleFavorite(pokemon.id)
   setIsInFavorites(!isInFavorites)

   if (isInFavorites) return 
  
 confetti ({
  zIndex:999,
  particleCount:100,
  spread:160,
  angle:-100,
  origin:{
    x:1,
    y:0,
  }
 })
  }
  


  
  return (
    <Mainlayout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding:'30px'}}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
              alt={pokemon.name}
              width="100%"
              height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}> 
        <Card>
          <Card.Header css={{display:'flex', justifyContent: 'space-between'}}>
            <Text h1 transform="capitalize">{pokemon.name}</Text>
            <Button onClick={onTooglefavorite} color="gradient" bordered={!isInFavorites}>{isInFavorites?'En favoritos': 'Guardar en favoritos'}</Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction="row" display="flex" gap={0}>
              <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
              />
              <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
              />
              <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
              />
              <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
              />
            </Container>
          </Card.Body>
        </Card>
        </Grid>
      </Grid.Container>
    </Mainlayout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await pokeApi.get<Pokemonlistresponse>('/pokemon?limit=151')
  const pokemonsname : string[] = data.results.map(pokemon=>pokemon.name)

  

  return {
    paths:pokemonsname.map(name=>({
      params:{name}
    })),
    fallback:false
  }
}



export const getStaticProps: GetStaticProps = async ({params}) => {


  const {name} = params as {name: string};

  

  return {
    props:{
      pokemon: await getPokemonInfo(name)
    }
  }
}

export default PokemonByNamePage 