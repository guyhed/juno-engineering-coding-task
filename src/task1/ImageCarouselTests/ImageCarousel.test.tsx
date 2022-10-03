import { render } from '@testing-library/react';
import ImageCarousel from "../ImageCarousel";

test("ImageCarousel renders ImageCarouselCountainer", () => {
  const { getByTestId } = render(<ImageCarousel />);
  expect(getByTestId("ImageCarouselCountainer")).toBeInTheDocument();
});

