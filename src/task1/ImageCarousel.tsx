import { fetchImageUrls, fetchImage } from "../api/index";
import ImageCarouselCountainer from "./carouselComoponents/ImageCarouselContainer";

const ImageCarousel = () => <ImageCarouselCountainer getImageUrls={fetchImageUrls} loadImage={fetchImage} />

export default ImageCarousel;
