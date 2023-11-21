
const ImageGalleryItem = ({ props, onClick }) => {

    return (
        <div >
            {props.map(({ largeImageURL, tags, webformatURL, id }) => (< li className="gallery-item" key={id}>
                <img src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL)} />
            </li >))
            }  </div>
    );
};

export default ImageGalleryItem;

