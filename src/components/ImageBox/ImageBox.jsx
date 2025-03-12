

export const ImageBox = ({imagesSrc, alt}) => {
    return (
        <div className="content-image">
            <img src={imagesSrc} alt={alt} />
        </div>
    )
}
