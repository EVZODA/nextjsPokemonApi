import { Container, Image, Text } from '@nextui-org/react';

export const Nofavorites = () => {
  return (
    <Container css={{display:'flex', flexDirection:'column', height:'calc(100vh - 100px)', alignItems:'center', justifyContent: 'center' ,alignSelf:'center'
        }}>
            <Text h1>
                No hay favoritos
            </Text>
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Imagen' width={350} height={350}
            css={{opacity:'0.1'}}
            />
          </Container>
  )
}
