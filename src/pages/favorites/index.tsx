
import { useState, useEffect } from 'react';
import { Mainlayout } from '../../../components/layouts/Mainlayout';
import { Nofavorites } from '../../../components/ui';
import { localFavorites } from '../../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemon } from '../../../components/pokemon';


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Mainlayout title='Favoritos'>
      {
        favoritePokemons.length === 0 ?(<Nofavorites></Nofavorites>) :
        (<FavoritePokemon pokemons={favoritePokemons}/>)

          }

    </Mainlayout>
  )
}

export default FavoritesPage