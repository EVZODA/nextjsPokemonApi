
import { GetStaticProps, NextPage } from "next";
import { Mainlayout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemonlistresponse, SmallPokemon } from "../../interfaces";
import {Grid} from "@nextui-org/react";
import { PokemonCard } from "../../components/pokemon";



interface Props {
  pokemons: SmallPokemon[];
}


 const Homepage: NextPage<Props> = ({pokemons}) => {

 
console.log(pokemons)
 
  return (
    <Mainlayout title="Listado de pokemons">
  <Grid.Container gap={2} justify="flex-start">
   {
    pokemons.map((pokemon)=>(
<PokemonCard key={pokemon.id} pokemon= {pokemon}/>
    ))
   }
  
  </Grid.Container>

  
  </Mainlayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<Pokemonlistresponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((poke, i)=>({
...poke,
id:i+1,
img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`

  }))

  return {
    props:{
      pokemons
    }
  }
}



export default Homepage

