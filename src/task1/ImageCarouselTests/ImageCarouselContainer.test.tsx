import { render } from '@testing-library/react';
import { getLoadImageMock, getLoadUrlsMock, testUrl } from './testUtils'
import ImageCarouselContainer from "../carouselComoponents/ImageCarouselContainer";
import { act } from 'react-dom/test-utils';

test("ImageCarouselCountainer shows preloader while waiting for urls", () => {
  const [loadUrls, resolveUrls] = getLoadUrlsMock();
  const [loadImage, resolveUrl] = getLoadImageMock();
  const { queryByTestId } = render(<ImageCarouselContainer loadImage={loadImage} getImageUrls={loadUrls} />);
  expect(queryByTestId("Preloader")).toBeInTheDocument();
  expect(queryByTestId(/Image[0-9]/i)).toBeFalsy();
});

test("ImageCarouselCountainer shows images when urls are loaded", async () => {
  const [loadUrls, resolveUrls] = getLoadUrlsMock();
  const [loadImage, resolveUrl] = getLoadImageMock();
  const { queryByTestId } = render(<ImageCarouselContainer loadImage={loadImage} getImageUrls={loadUrls} />);
  await act(async () => resolveUrls([testUrl + '0', testUrl + '1', testUrl + '2']))
  expect(queryByTestId("Image0")).toBeInTheDocument();
  expect(queryByTestId("Image1")).toBeInTheDocument();
  expect(queryByTestId("Image2")).toBeInTheDocument();
});

