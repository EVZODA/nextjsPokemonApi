import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { PokemonData } from './PokemonData';

interface props {
    pokemons: number[];
}

export const FavoritePokemon: FC<props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
          {
            pokemons.map(id =>(
              <PokemonData pokemonid={id} key={id}></PokemonData>
            ))
          }
        </Grid.Container>
  )
}
