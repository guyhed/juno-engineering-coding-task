import React, { useEffect, useState } from "react";

const useLoadImageUrls = (getImageUrls: () => Promise<string[]>) => {
    const [urls, setUrls] = useState<string[] | null>(null);
    useEffect(() => {
        getImageUrls().then(setUrls)
    }, [getImageUrls]);
    return urls;
}
export default useLoadImageUrls