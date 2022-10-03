import { Direction } from "../types";
import Preloader from "./Preloader";
import { css } from '@emotion/css';
import classnames from 'classnames';
import useLoadImage from "../hooks/useLoadImage";

type ImageContainerProps = {
    index: number;
    side: Direction
    far: boolean;
    showing: boolean
    loadImage: (i: number) => Promise<string>
}

const hidden = css({
    visibility: "hidden",
    transition: '0',
    opacity: '0'
});

const onRight = css({
    transform: 'translate3d(500px, 0px, 0px) rotate3d(0,1,0,90deg)',
    transformOrigin: 'left'
})
const onLeft = css({
    transform: 'translate3d(-500px, 0px, 0px) rotate3d(0,1,0,-90deg)',
    transformOrigin: 'right'
})

const baseStyle = css({
    position: 'absolute',
    maxHeight: "100%",
    width: '100%',
    height: "100%",
    textAlign: "center",
    transition: '1s',
    backgroundColor: "#e5eaf0",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
})

const ImageContainer = ({ index, side, far, showing, loadImage }: ImageContainerProps) => {
    const uri = useLoadImage(index, loadImage, far);
    const classes = classnames({
        [baseStyle]: true,
        [onRight]: !showing && side === "right",
        [onLeft]: !showing && side === "left",
        [hidden]: far
    });

    return <div className={classes} style={{ backgroundImage: (uri ? `url(${uri})` : "none") }}  data-testid={"Image"+index}>
        {!uri && <Preloader />}
    </div>
}

export default ImageContainer
