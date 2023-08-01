import Image from 'next/image'
import styles from './page.module.css'
import CardsComponet from './components/Carts/CardComponentHome'

export default function Home() {
  return (
    <main className={styles.main}>
     <CardsComponet/>
     <h1>hola como estas amigo mio </h1>
    </main>
  )
}
