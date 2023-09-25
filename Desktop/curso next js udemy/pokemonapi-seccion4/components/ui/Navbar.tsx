
import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import styles from "./navbar.module.css"
import Image from "next/image"
import Nextlink from "next/link"

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{ backgroundColor: theme?.colors.gray300.value }} className={styles.navbarcontainer}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <Link href='/' as={Nextlink}>
        <Text h2 css={{ m: '2' }}>
          P
        </Text>
        <Text h3 css={{ m: '2' }}>
          okémon
        </Text>
      </Link>

      <Nextlink href="/favorites" passHref  legacyBehavior>
        <Link>
          <Spacer css={{ flex: 4 }}></Spacer>
          <Text color="white" h3>Favoritos</Text>
        </Link>
      </Nextlink>
    </div>

  )
}