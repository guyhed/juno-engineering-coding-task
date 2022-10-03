import { useEffect, useState } from "react";

const useLoadImage = (index: number,  loadImage: (i: number) => Promise<string>, notYet: boolean) => {
    const [uri, setUri] = useState<string | null>(null);
    const [load, setLoad] = useState(false);
    useEffect(() => {
      if(!notYet && !load) setLoad(true); 
      if(load) loadImage(index).then(setUri);
    }, [index, load, notYet]);
    return uri;
}
export default useLoadImage