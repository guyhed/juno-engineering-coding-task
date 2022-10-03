import type { Direction } from "../types";
import { useState } from "react";

const setNoOp = (nImages: number, op: () => void) => nImages > 0 ? op : () => { }

const useImageIndex = (nImages: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const increase = setNoOp(nImages, () => setCurrentIndex(i => (i + 1) % nImages));
    const decrease = setNoOp(nImages, () => setCurrentIndex(i => (nImages + i - 1) % nImages));
    return { currentIndex, decrease, increase };
}
export default useImageIndex