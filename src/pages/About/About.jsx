import { Card } from "../../components/card/Card" 
import { Header } from "../../components/header/Header"

import { saiyayinImages } from "../../data/saiyayin"
import './About.css'

export const About = () => {
    return (
        <>
            <Header title="Somos los mejores" subtitle="Conoce sobre nosotros" />
            <div className="container">
                {
                    saiyayinImages.map((saiyayinImages) => (
                        <Card 
                            key={saiyayinImages.id}
                            imagesSrc={saiyayinImages.image}
                            alt={saiyayinImages.alt}
                            nombre={saiyayinImages.nombre}
                            descripcion={saiyayinImages.descripcion}
                            cargo={saiyayinImages.cargo}
                        />
                    ))
                }
                
            </div>       
        </>
    )
}