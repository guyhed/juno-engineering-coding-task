export const testUrl = 'http://test.url/'

export const getLoadImageMock = () => {
    let resolveUrl: (u: string) => void = () => { };
    const promise = new Promise<string>(resolve => { resolveUrl = resolve });
    const loadImage = (i: number) => promise;
    return [loadImage, resolveUrl] as [ (i: number) =>  Promise<string>,(u: string) => void ];
}

export const getLoadUrlsMock = () => {
    let resolveUrls: (u: string[]) => void = () => { };
    const promise =new Promise<string[]>(resolve => { resolveUrls = resolve });
    const loadUrls = () => promise;
    return [loadUrls, resolveUrls] as [ () =>  Promise<string[]>,(u: string[]) => void ];
}

export const wait = () => new Promise(resolve => setTimeout(resolve,100)); 
