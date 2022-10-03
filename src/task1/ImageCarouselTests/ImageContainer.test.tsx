import { render, act } from '@testing-library/react';
import { getLoadImageMock, testUrl, wait } from './testUtils'
import ImageContainer from "../carouselComoponents/ImageContainer";

test("ImageCountainer shows preloader while waiting for image load", () => {
  const [loadImage, resolveUrl] = getLoadImageMock();
  const { queryByTestId } = render(<ImageContainer loadImage={loadImage} index={2} far={false} showing={true} side="left" />);
  expect(queryByTestId("Preloader")).toBeInTheDocument();
});

test("ImageCountainer hides preloader when image is loaded", async () => {
  const [loadImage, resolveUrl] = getLoadImageMock();
  const { queryByTestId } = render(<ImageContainer loadImage={loadImage} index={2} far={false} showing={true} side="left" />);
  await act(async () => resolveUrl(testUrl));
  expect(queryByTestId("Preloader")).not.toBeInTheDocument();
});

test("ImageCountainer show image as background", async () => {
  const [loadImage, resolveUrl] = getLoadImageMock();
  const { queryByTestId } = render(<ImageContainer loadImage={loadImage} index={2} far={false} showing={true} side="left" />);
  await act(async () => resolveUrl(testUrl));
  expect(queryByTestId(/image2/i)?.style.backgroundImage).toContain(testUrl);
});

