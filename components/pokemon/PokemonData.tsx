import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface props {
  pokemonid: number;
}

export const PokemonData:FC<props> = ({pokemonid}) => {

  const router = useRouter()

  const onClickedrouter = () => {
    router.push(`/pokemon/${pokemonid}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonid} onClick={onClickedrouter}>
    <Card isHoverable css={{padding:"10"}}>
      <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonid}.png`}
      width={'100%'}
      height={140}
      /> 
    </Card>
  </Grid>
  
  )
}
