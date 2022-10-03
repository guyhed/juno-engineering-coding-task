import logo from '../logo.svg';
import ImageCarousel from "./ImageCarousel";

function App() {
  return (<div style={{padding:'20px 50px'}}>
    <h3>Here is an image carousel:</h3>
    <div>
      <ImageCarousel />
    </div>
    <p>Note: when the cache is disabled, the images are loaded slowly in the carousel, 
      even after they were fetched. There are way are ways around it 
      (e.g. painting the fetched image on a canvas) but since most users do not
      browse with their devtools open, I let it go.</p>
  </div>);
}

export default App;
