import { Header } from '../../components/header/Header'
import { ImageBox } from '../../components/ImageBox/ImageBox'
import { InfoSection } from '../../components/infoSection/InfoSection'

import { saiyayinImages } from '../../data/saiyayin'

import './Home.css'

export const Home = () => {
    return (
        <>
            <Header title="Esta es la pagina de inicio" 
                subtitle="Soy un subtitulo"/>
                    <div className="container">
                        </div>
                    <InfoSection />
                        <div className="container">
                                
                            {saiyayinImages.map((saiyayinImages) => (
                            <ImageBox 
                            imagesSrc={saiyayinImages.image} 
                            key={saiyayinImages.id} 
                            alt={saiyayinImages.alt} />
                            ))}
                        </div>

        </>

)
}
