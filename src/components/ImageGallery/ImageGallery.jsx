import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

const ImageGallery = (props, onClick) => {

    return (

        <ul className="gallery">
            <ImageGalleryItem props={props.props} onClick={onClick} />
        </ul>
    );
};
export default ImageGallery;