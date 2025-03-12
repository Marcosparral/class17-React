import { ImageBox } from "../ImageBox/ImageBox"

export const Card = ({imagesSrc, alt, nombre, descripcion, cargo}) => {
    return (
        <div className="card">
            <div className="card__header">
                <ImageBox imagesSrc={imagesSrc} alt={alt} />
                <h3>{nombre}</h3>
            </div>

            <div className="card__body">
                <p><span>Cargo:</span>{cargo}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}