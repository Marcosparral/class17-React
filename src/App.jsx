import { Header } from './components/header/Header'
import { ImageBox } from './components/ImageBox/ImageBox'
import { InfoSection } from './components/infoSection/InfoSection'

import goku from './assets/images/Goku.png'
import vegeta from './assets/images/vegeta.jpg'

export const App = () => {
  return (
    <>
      <Header title="Esta es la pagina de inicio" 
      subtitle="Soy un subtitulo"/>
      <InfoSection />
      <ImageBox imagesSrc={goku}/>
      <ImageBox imagesSrc={vegeta}/>
    </>
  )
}