import { css } from '@emotion/css';
import ImageContainer from "./ImageContainer";
import MoveButton from "./MoveButton";
import Preloader from "./Preloader";
import useImageIndex from "../hooks/useImageIndex";
import useLoadImageUrls from "../hooks/useLoadImageUrls";
import { Direction } from "../types";

type ImageCarouselContainerProps = {
    getImageUrls: () => Promise<string[]>
    loadImage: (i: number) => Promise<string>
}

const wrapper = css({
    display: 'grid',
    height: '300px',
    width: '628px',
    gridAutoColumns: '64px 500px 64px',
    gridAutoFlow: 'column',
    backgroundColor: "#e8e9ec"
})

const images = css({
    position: 'relative',
    height: '300px',
    overflow: "hidden"
})

const onWhichSide = (currentIndex: number, nImages: number) => (i: number) =>
    (i > currentIndex && i - currentIndex < nImages / 2) || (i < currentIndex && currentIndex - i > nImages / 2)
        ? "right" as Direction : "left" as Direction

const farFromCurrent = (currentIndex: number, nImages: number) => (i: number) =>
    Math.min(Math.abs(i - currentIndex), nImages - Math.abs(i - currentIndex)) > 2

const ImageCarouselCountainer = ({ loadImage, getImageUrls }: ImageCarouselContainerProps) => {
    const urls = useLoadImageUrls(getImageUrls);
    const { currentIndex, increase, decrease } = useImageIndex(urls?.length ?? 0);
    const side = onWhichSide(currentIndex, urls?.length ?? 0);
    const far = farFromCurrent(currentIndex, urls?.length ?? 0);
    return <div className={wrapper}>
        <MoveButton direction="left" onClick={increase} />
        <div className={images} data-testid="ImageCarouselCountainer">
            {urls ?
                urls.map((u, i) =>
                    <ImageContainer index={i} key={i} side={side(i)} far={far(i)} showing={i === currentIndex} loadImage={loadImage} />)
                : <Preloader />}
        </div>
        <MoveButton direction="right" onClick={decrease} />
    </div>;
};

export default ImageCarouselCountainer;
